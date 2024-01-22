/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export type KeywordSearchInterface = Omit<kakao.maps.services.PlacesSearchResultItem, 'x' | 'y'> & {
  position: {
    lat: number;
    lng: number;
  };
};

export const MapPage: React.FC = () => {
  const [info, setInfo] = useState('');
  const [markers, setMarkers] = useState<KeywordSearchInterface[]>([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch('서울 맛집', (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers: KeywordSearchInterface[] = [];
        console.log(typeof data[0].y);

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: +data[i].y,
              lng: +data[i].x,
            },
            place_name: data[i].place_name,
            address_name: data[i].address_name,
            category_name: data[i].category_name,
            road_address_name: data[i].road_address_name,
            id: data[i].id,
            phone: data[i].phone,
            place_url: data[i].place_url,
            category_group_name: data[i].category_group_name,
            distance: data[i].distance,
          });
          bounds.extend(new kakao.maps.LatLng(+data[i].y, +data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        // @ts-ignore
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <Map // 로드뷰를 표시할 Container
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.id}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker.place_name)}
        >
          {info && info === marker.place_name && (
            <div style={{ color: '#000' }}>{marker.place_name}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
};
