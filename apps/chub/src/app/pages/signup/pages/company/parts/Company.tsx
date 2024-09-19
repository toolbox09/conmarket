import { useNavigate } from 'react-router-dom';
import { Flex, Button, Divider, Anchor, Center } from '@repo/ui';
import { Icon360View, IconCircleLetterC, IconMail } from '@repo/ui';
import { LogoTitle } from '@/components';


export function Company() {
    const navigate = useNavigate();
    return (
    <Flex w='100%' h='100%' component={Center}  >
        <Flex direction={'column'} w={'400px'} mt={'80px'} mb={'80px'} gap={'24px'} >
          <Flex w={'100%'} justify={'center'} mb={'36px'}>
              <LogoTitle/>
          </Flex>
          <Button onClick={()=>navigate('./memberSocal')} leftSection={<Icon360View size={24} />} w={'100%'} size={'md'} color='#2DB400' >네이버 계정으로 계속하기</Button>
          <Button onClick={()=>navigate('./memberSocal')} leftSection={<IconCircleLetterC size={24} />} w={'100%'} size={'md'} color='#FEE500' >카카오 계정으로 계속하기</Button>
          <Button onClick={()=>navigate('./memberId')} leftSection={<IconMail size={24} />} w={'100%'} size={'md'} variant='outline' color='dark.3' >이메일 계정으로 계속하기</Button>
          <Divider w={'100%'}></Divider>
          <Flex justify={'space-between'} mx={'100px'} >
              <text>이미 계정이 있나요?</text>
              <Anchor onClick={()=>navigate('/signin')} target="_blank" underline="always" style={{ color : 'black' }} >로그인</Anchor>
          </Flex>
        </Flex>
    </Flex>
    )
}