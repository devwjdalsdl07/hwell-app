// 위경도 정보를 여러 컴포넌트에서 재활용하여 관리하는 코드
// 함수를 한번만 만들고 재 렌더링이 되더라도 새로 생성 안해요
// 성능 최적화 : 초반에는 적용하지 않고 테슽 중에 고려를 해 보자
import { useCallback } from 'react';
// 위경도 정보를 전역 state 로 보관한다.
// SWR 을 활용한다.
// SWR 을 활용하여 위경도 데이터를 전역에 보관(담아둔다)한다.
// mutate : SWR 에 쓴다(저장한다.)
import { Info } from '@/types/info';
import { mutate } from 'swr';
// SWR 의 KEY 는 문자열 : 문자열의 장소에 전역데이터를 보관한다.
export const INFO_KEY = '/infos';

const useInfo = () => {
  // 초기 위경도 데이터를 전달받아 swr 키 INFO_KEY 에 보관한다.
  // infos 매개변수는 [위도, 경도], [위도, 경도]
  //   useCallback(함수,[])
  const initializeInfos = useCallback((infos: Info[]) => {
    mutate(INFO_KEY, infos);
  }, []);
  return {
    initializeInfos,
  };
};
export default useInfo;
