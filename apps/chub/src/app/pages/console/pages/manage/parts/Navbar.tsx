import { Flex, Title, Text, Divider } from '@repo/ui';
import { IconUserCircle, IconBuilding } from '@repo/ui';

export function Navbar() {

  return (
    <Flex w={400} direction={'column'} style={{ backgroundColor : '#373A40' }} className='bdr'>
      <Flex align={'center'} h={'80px'} px={'24px'}>
        <Title style={{ color : 'white' }}>CONMARKET</Title>
      </Flex>

      <Flex direction={'column'} align={'center'} gap={'16px'} py={'16px'} style={{ backgroundColor : 'white' }} >
        
        <IconUserCircle size={'50px'} />
        
        <Flex direction={'column'} align={'center'} gap={'8px'}>
          <Text>수성엔지니어링</Text>
          <Text>sseng12@gmail.com</Text>
        </Flex>

        <Flex direction={'row'} align={'center'} gap={'24px'}>
          <Text style={{ cursor : 'pointer' }}>프로필 수정</Text>
          <Divider orientation="vertical" />
          <Text style={{ cursor : 'pointer' }}>로그아웃</Text>
        </Flex>

      </Flex>

      <Flex direction={'column'} px={'24'} py={'24px'} gap={'24px'}>
        
        <Flex direction={'row'} align={'center'} gap={'24px'}>
          <IconBuilding style={{ color : 'white' }} />
          <Text style={{ color : 'white' }}>기업정보 관리</Text>
        </Flex>

        <Flex direction={'row'} align={'center'} gap={'24px'}>
          <IconBuilding style={{ color : 'white' }} />
          <Text style={{ color : 'white' }}>프로젝트 관리</Text>
        </Flex>

      </Flex>
    </Flex>
  )
}