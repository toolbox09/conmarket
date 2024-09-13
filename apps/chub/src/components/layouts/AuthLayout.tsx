import { Flex, FlexProps } from '@repo/ui';
import { LogoTitle } from '../internal';

// function Link
function AuthLayoutHeader() {

    return (
        <Flex 
          direction={'column'} 
          align={'center'} 
          w={'100%'} 
          h={'80px'} 
          className='bdb'
          px='16px' 
          py='22px' 
        >
          <Flex w={1060} >
            <LogoTitle/>
          </Flex>

        </Flex>
    );
}

interface AuthLayoutProps extends FlexProps {
}

export function AuthLayout( { children, ...props} : AuthLayoutProps ) {
    return (
        <Flex {...props}  direction={'column'} >
            <AuthLayoutHeader/>
            {children}
        </Flex>
    )
}