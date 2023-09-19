import useMap from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import React from 'react';
import Map from './Map';
import Markers from './Markers';

// Marker 를 그려야 합니다.
// Marker 는 naver.map 객체에 그려야 합니다. (전역 참조가 가능해야 함)

const MapScene = ({}) => {
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
