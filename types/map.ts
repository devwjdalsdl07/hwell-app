import { Cordinates } from './info';

export type NaverMap = naver.maps.Map;
export type Marker = {
  map: NaverMap;
  cordinates: Cordinates;
};
