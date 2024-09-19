import { Flex, FlexProps, Text, Divider } from '@repo/ui';
// import { LogoTitle } from '@/components';

interface FormBoxProps extends FlexProps {
  title : string;
}

function Title( { title } : { title : string } ) {
  return (
    <Flex justify={'start'} w={'100%'} direction={'column'} >
      <Text fw='bold' size='21px' >{title}</Text>
      <Divider w={'100%'} mt='16px' ></Divider>   
    </Flex>
  )
}

export function FormBox( { title, children, ...props } : FormBoxProps ) {
  return (
    <Flex {...props} direction={'column'} w={'440px'} p={'20px'} mt={'80px'} mb={'80px'} gap={'24px'} style={{ backgroundColor : '#fff',  border : 'gray 1px solid' }} >
      <Title title={title} />
      {children}
    </Flex>
  )
}