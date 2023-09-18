import Script from 'next/script';
import React, { useRef } from 'react';
import { NaverMap } from '@/types/map';
import { Cordinates } from '@/types/info';
import { INITIAL_CENTER, INITIAL_MIN, INITIAL_ZOOM } from '@/hooks/useMap';

// Props 를 통해서 지도값을 셋팅한다.
type Props = {
  mapId?: string;
  initialCenter?: Cordinates;
  initialZoom?: number;
  minZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  minZoom = INITIAL_MIN,
  onLoad,
}: Props) => {
  // 지도를 출력할 HTML DOM 참조
  const mapRef = useRef<NaverMap | null>(null);
  // 네이버 JS 로드후 처리
  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: minZoom,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new window.naver.maps.Map(mapId, mapOptions);

    // 지도 객체 생성후에는 우리가 원하는 HTML DOM 요소를 지정하여
    // 출력한다.
    mapRef.current = map;

    // 초기 로딩 후 처리
    if (onLoad) {
      onLoad(map);
    }
  };
  return (
    <>
      {/* 외부 자바스크립트 로드 하기 */}
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onLoad={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default Map;
