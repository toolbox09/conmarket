import { useNavigate } from 'react-router-dom';
import { Button, Flex, Title } from '@repo/ui';
import { LogoTitle } from '@/components';
import { Hero } from './parts/Hero';
import classes from './index.module.scss';
import landingImg from '@/assets/console-landing1.png';

function Landing() {
  const navigate = useNavigate();

  return <Flex w='100vw' h='100vh'  direction={'column'} >
    <Flex className='bdb' align={'center'}  direction={'column'} >
      <Flex w='1024' p='md' justify={'space-between'} >
        <Flex gap='xs' align={'center'} >
          <LogoTitle size='20px' />
          <Title c={'gray'} size='20px' >PARTNERS</Title>
        </Flex>
        <Flex gap='md' >
          <Button onClick={()=>navigate('/signup')} size='sm' variant='default' >회원가입</Button>
          <Button onClick={()=>navigate('/signin')} size='sm' variant='default' >로그인</Button>
        </Flex>
      </Flex>
    </Flex>
    <Flex flex={1} align={'center'}  direction={'column'}  className={classes.hero}  style={{ backgroundImage : `url(${landingImg})` }}  >
      <Hero/>
    </Flex>
  </Flex>
}

export default Landing;