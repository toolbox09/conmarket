// import { AuthLayout } from '@/components';
import { Flex } from '@repo/ui';
import { LoginPage } from './parts/LoginPage';


function Signin() {
  return (
    <Flex w='100vw' h='100vh' >
      <LoginPage/>
    </Flex>
  )
}

export default Signin;