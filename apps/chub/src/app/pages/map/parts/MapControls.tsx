import { Flex } from '@repo/ui';
import { MapControl } from '@repo/kakao-map';
import { CombinContorl } from '../modules/combin/CombinContorl';
import { MarkerControl } from '../modules/marker/MarkerControl';

export function MapControls() {
  return (
  <>
    <MapControl position='topleft' >
      <Flex gap='lg' >
        <CombinContorl/>
        <MarkerControl/>
      </Flex>
    </MapControl>
  </>
  )
}