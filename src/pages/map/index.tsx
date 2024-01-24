/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader, CustomOverlayMap } from 'react-kakao-maps-sdk';

import { Marker } from 'src/assets';

import * as S from './styled';

export type KeywordSearchInterface = Omit<kakao.maps.services.PlacesSearchResultItem, 'x' | 'y'> & {
  position: {
    lat: number;
    lng: number;
  };
};

export const MapPage: React.FC = () => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY, // 발급 받은 APPKEY
    libraries: ['services', 'clusterer'], // 사용할 라이브러리 목록
    // 추가 옵션
  });

  const [info, setInfo] = useState('');
  const [markers, setMarkers] = useState<KeywordSearchInterface[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch('서울 맛집', (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers: KeywordSearchInterface[] = [];

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
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <>
      {loading ? (
        <div>
          <h1>loading..</h1>
        </div>
      ) : (
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
          onClick={() => setInfo('')}
        >
          {markers.map((marker) => (
            <div key={`marker-${marker.id}-${marker.position.lat},${marker.position.lng}`}>
              <MapMarker
                position={marker.position}
                onClick={() => setInfo(marker.place_name)}
                image={{
                  src: Marker,
                  size: {
                    width: 40,
                    height: 40,
                  },
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  },
                }}
              />
              {info && info === marker.place_name && (
                <CustomOverlayMap position={marker.position} clickable yAnchor={2.8}>
                  <S.MapMarkerBox>
                    <S.MapMarkerBoxLink to={marker.place_url} target="_blank">
                      {marker.place_name}
                    </S.MapMarkerBoxLink>
                    <S.MapMarkerBoxAddress>
                      {marker.road_address_name}
                      <S.MapMarkerBoxAddressLink
                        to={`https://map.kakao.com/link/to/${marker.id}`}
                        target="_blank"
                      >
                        {' '}
                        (길찾기)
                      </S.MapMarkerBoxAddressLink>
                    </S.MapMarkerBoxAddress>
                  </S.MapMarkerBox>
                </CustomOverlayMap>
              )}
            </div>
          ))}
        </Map>
      )}
    </>
  );
};
