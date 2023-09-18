// 위도 경도 데이터 타입
type Lat = number;
type Lng = number;
export type Cordinates = [Lat, Lng];
// json 에서 불러올 데이터 타입 정의
export type Info = {
  cordinates: Cordinates;
  //name: string;
  //doctor: number;
};
