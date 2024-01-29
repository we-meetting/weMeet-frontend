import React from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

import { MarkerSvg } from 'src/assets';
import { useMakerInfoStore } from 'src/stores';

import * as S from './styled';

export interface MarkerProps {
  place_name: string;
  place_url?: string;
  position: {
    lat: number;
    lng: number;
  };
  id?: string;
  road_address_name: string;
}

export const Marker: React.FC<MarkerProps> = ({
  place_name,
  place_url,
  position,
  id,
  road_address_name,
}) => {
  const { makerInfo, setMakerInfo } = useMakerInfoStore();

  return (
    <>
      <MapMarker
        position={position}
        onClick={() => setMakerInfo(place_name)}
        image={{
          src: MarkerSvg,
          size: {
            width: 40,
            height: 40,
          },
          options: {
            offset: {
              x: 27,
              y: 69,
            },
          },
        }}
      />
      {makerInfo && makerInfo === place_name && (
        <CustomOverlayMap position={position} clickable yAnchor={2.8}>
          <S.MapMarkerBox>
            {place_url ? (
              <S.MapMarkerBoxLink to={place_url} target="_blank">
                {place_name}
              </S.MapMarkerBoxLink>
            ) : (
              <S.MapMarkerBoxTitle>{place_name}</S.MapMarkerBoxTitle>
            )}
            <S.MapMarkerBoxAddress>
              {road_address_name}{' '}
              <S.MapMarkerBoxAddressLink
                to={`https://map.kakao.com/link/to/${
                  id ? id : `${place_name},${position.lat},${position.lng}`
                }`}
                target="_blank"
              >
                (길찾기)
              </S.MapMarkerBoxAddressLink>
            </S.MapMarkerBoxAddress>
          </S.MapMarkerBox>
        </CustomOverlayMap>
      )}
    </>
  );
};
