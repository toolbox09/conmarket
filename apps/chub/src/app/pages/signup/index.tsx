// import { AuthLayout } from '@/components';
import { Flex } from '@repo/ui';
import { RegisterPanel } from './parts/RegisterPanel';


function Signup() {
  return (
    <Flex w='100vw' h='100vh' >
      <RegisterPanel/>
    </Flex>
  )
}

export default Signup;