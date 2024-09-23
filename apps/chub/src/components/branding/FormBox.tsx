import { Flex, FlexProps, Text, Divider } from '@repo/ui';

interface FormBoxProps extends FlexProps {
  title? : string;
}

function Title( { title } : { title : string } ) {
  return (
    <Flex justify={'start'} w={'100%'} direction={'column'} >
      <Text fw='bold' size='21px' >{title}</Text>
      <Divider w={'100%'} mt='16px' ></Divider>   
    </Flex>
  )
}

// style={{ backgroundColor : '#fff',  border : 'var(--mantine-color-gray-3) 1px solid', borderRadius : 'var(--mantine-radius-md)' }}
// style={{ backgroundColor : '#fff',  border : 'gray 1px solid' }}
export function FormBox( { title, children, ...props } : FormBoxProps ) {
  return (
    <Flex {...props} 
      direction={'column'} 
      w={'450px'} 
      p={'30px'} 
      mt={'80px'} 
      mb={'80px'} 
      gap={'24px'} 
      style={{ backgroundColor : '#fff',  border : 'var(--mantine-color-gray-3) 1px solid', borderRadius : 'var(--mantine-radius-sm)', boxShadow : 'var(--mantine-shadow-sm)' }}
    >
      { title && <Title title={title} />}
      {children}
    </Flex>
  )
}