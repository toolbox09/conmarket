import { useNavigate } from 'react-router-dom';
import { Title, Text, Button, Flex } from '@repo/ui';


export function Hero() {

  const navigate = useNavigate();
  return (
  <Flex direction={'column'} align={'center'} mt='80px' >
    <Title >
      건축의 모든 가능성, 콘마켓에서 한번에
    </Title>

    <Flex direction={'column'} align={'center'} mt='xl' >
      <Text size='xl'  >프로젝트 탐색·관리·성장을 돕는</Text>
      <Text size='xl'  >최적의 서비스와 솔루션을 제공합니다.</Text>
    </Flex>


    <Flex gap='xl'  mt='xl'>
      <Button size="lg" onClick={()=>navigate('./manage')} >
        시작하기
      </Button>
      <Button variant='outline' size="lg" onClick={()=>navigate('/signup')} >
        회원가입
      </Button>
    </Flex>
  </Flex>
  )
}