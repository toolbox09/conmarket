import { Flex } from '@repo/ui';
import { LandingLayout } from '@/components';
import { MapContainer } from './parts/MapContainer';
import { SideBar } from './parts/SideBar';


function Map() {
  return (
    <LandingLayout w='100vw' h='100vh' >
      <Flex flex={1}>
        <SideBar/>
        <MapContainer/>
      </Flex>

    </LandingLayout>
  )
}

export default Map;