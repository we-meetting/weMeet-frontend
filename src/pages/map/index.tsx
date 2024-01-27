import React, { useEffect, useState } from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Marker, MarkerProps } from 'src/components';
import { useMakerInfoStore, useMapStore } from 'src/stores';

export const MapPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dataLocation = queryParams.get('location');
  const placeName = queryParams.get('placeName');

  const { mapKeyword, mapAddress } = useMapStore();
  const { resetMakerInfo } = useMakerInfoStore();

  const [] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_MAP_KEY,
    libraries: ['services', 'clusterer'],
  });

  const [markers, setMarkers] = useState<MarkerProps[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();
    const geocoder = new kakao.maps.services.Geocoder();

    const bounds = new kakao.maps.LatLngBounds();

    if (!dataLocation && mapKeyword !== '') {
      ps.keywordSearch(mapKeyword, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const markers = data.map((item) => {
            const position = {
              lat: mapAddress.lat ? +mapAddress.lat : +item.y,
              lng: mapAddress.lng ? +mapAddress.lng : +item.x,
            };
            bounds.extend(new kakao.maps.LatLng(position.lat, position.lng));
            return {
              position,
              ...item,
            };
          });

          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        } else {
          toast.warn('위치를 찾을 수 없어요');
        }
      });
    } else {
      geocoder.addressSearch(dataLocation || '', (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(+data[0].y, +data[0].x);
          map.setCenter(coords);

          bounds.extend(new kakao.maps.LatLng(+data[0].y, +data[0].x));
          setMarkers([
            {
              position: {
                lat: +data[0].y,
                lng: +data[0].x,
              },
              place_name: placeName || '',
              road_address_name: data[0].address_name,
            },
          ]);
        } else {
          toast.warn('위치를 찾을 수 없어요');
        }
      });
    }
  }, [map, mapKeyword]);

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
      onClick={resetMakerInfo}
    >
      {markers.map((marker, index) => (
        <Marker {...marker} key={index} />
      ))}
    </Map>
  );
};
