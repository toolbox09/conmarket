import { Flex, FlexProps } from '@repo/ui';
import { LogoTitle } from '@/components';

interface FormPageProps extends FlexProps {
}

export function FormPage( { children, ...props } : FormPageProps ) {
  return (
    <Flex direction={'column'} w='100vw' h='100vh' style={{ backgroundColor : '#F1F3F5' }} align={'center'} {...props} >
      <LogoTitle mt={'80px'}/>
      {children}
    </Flex>
  )
}