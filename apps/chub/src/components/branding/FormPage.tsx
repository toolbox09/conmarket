import { Flex, FlexProps } from '@repo/ui';
import { LogoTitle } from './LogoTitle';

interface FormPageProps extends FlexProps {
}

// var(--mantine-color-dark-7)
// var(--mantine-color-gray-0)
// #F1F3F5
// 'var(--mantine-color-gray-0)'
export function FormPage( { children, ...props } : FormPageProps ) {
  return (
    <Flex {...props} direction={'column'} w='100vw' h='100vh' style={{ overflowX : 'hidden', backgroundColor : '#fff' }} align={'center'}  >
      <LogoTitle mt={'80px'}/>
      {children}
    </Flex>
  )
}