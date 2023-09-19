import { INFO_KEY } from '@/hooks/useInfo';
import { MAP_KEY } from '@/hooks/useMap';
import { Info } from '@/types/info';
import { NaverMap } from '@/types/map';
import React from 'react';
import useSWR from 'swr';
import Marker from './Marker';

const Markers = () => {
  // 전역 상태 정보 위경도 정보를 활용한다.
  const { data: infos } = useSWR<Info[]>(INFO_KEY);
  // 전역상태 정보 네이버 map 객체 정보
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  // infos 와 map 이 모두 있어야 출력한다.
  if (!map || !infos) return null;
  // 여기서 위 과정을 통과하고 나면 Marker 들을 출력한다.
  return (
    <>
      {infos.map((item, idx) => {
        // Marker 는 네이버지도, 위경도 정보를 받는다.
        return <Marker map={map} cordinates={item.cordinates} key={idx} />;
      })}
    </>
  );
};

export default Markers;
