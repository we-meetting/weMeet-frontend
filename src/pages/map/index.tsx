/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router-dom';

import { Marker } from 'src/assets';
import { useMapKeywordStore } from 'src/stores';

import * as S from './styled';

export type KeywordSearchInterface = {
  place_name: string;
  place_url: string;
  position: {
    lat: number;
    lng: number;
  };
  id?: string;
  road_address_name: string;
};

export type LocationSearchInterface = {
  address_name: string;
  address_type: 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
  x: string;
  y: string;
  address: kakao.maps.services.Address;
  road_address: kakao.maps.services.RoadAaddress;
  coords: kakao.maps.LatLng;
};

export const MapPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dataLocation = queryParams.get('location');
  console.log(dataLocation);
  const placeName = queryParams.get('placeName');

  const { keyword } = useMapKeywordStore();

  const [loading] = useKakaoLoader({
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
    const geocoder = new kakao.maps.services.Geocoder();
    const bounds = new kakao.maps.LatLngBounds();

    if (!dataLocation && keyword !== '') {
      ps.keywordSearch(keyword, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          let markers: KeywordSearchInterface[] = [];

          for (let i = 0; i < data.length; i++) {
            markers.push({
              position: {
                lat: +data[i].y,
                lng: +data[i].x,
              },
              ...data[i],
            });
            bounds.extend(new kakao.maps.LatLng(+data[i].y, +data[i].x));
          }
          setMarkers(markers);

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      });
    } else {
      geocoder.addressSearch(dataLocation || '', (data, status) => {
        console.log(data);
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
              place_url: '',
              road_address_name: data[0].address_name,
            },
          ]);
        }
      });
    }
  }, [map, keyword]);

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
                        to={`https://map.kakao.com/link/to/${
                          marker.id
                            ? marker.id
                            : `${placeName},${marker.position.lat},${marker.position.lng}`
                        }`}
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
