import { Flex, Button, TextInput, Title, Select, Text, Box } from '@repo/ui';
import { FormPage, FormBox } from '@/components';
import { ReactNode } from 'react';






interface FormInputProps {
  label : ReactNode;
  value : ReactNode;
  end? : boolean;
  w? : number;
}

function FormInput( { label, value, end, w } : FormInputProps ) {

  function render( node : ReactNode ) {
    if( typeof node === 'string' ) {
      return <Text>{node}</Text>
    }else{
      return node;
    }
  }

  return (
  <Flex direction={'row'} className='bdb' >
    <Flex align={'center'}  w={w ?? 300} px={'24px'} py={'16px'} style={{ backgroundColor : '#E9ECEF', borderRight : end ? '' : 'solid 1px #DEE2E6' }} >{render(label)}</Flex>
    <Flex align={'center'} flex={1} px={'24px'} py={'16px'} style={{ backgroundColor : 'white' }} >{render(value)}</Flex>
  </Flex>
  )
}


export function ProfilePanel() {
    const w = 300;
  return (
    <Flex direction={'column'} w={'100%'} style={{ backgroundColor : '#F8F9FA' }}>
      <Flex direction={'column'} gap={'24px'} p='xl'  >
        <Title order={3} >프로필 수정</Title>
        <Flex p={'40px'} direction={'column'} style={{ background : 'white' }}>
          <Flex direction={'column'} style={{ borderTop : 'solid 2px black', borderBottom : 'solid 2px black' }}>

            <FormInput label={'이메일'} value={'sseng12@gmail.com'} />
            <FormInput label={'비밀번호'} value={
              <Flex direction={'row'} gap={'16px'} align={'center'}>
                <TextInput w={270} placeholder='＊＊＊＊＊＊＊＊＊' disabled></TextInput>
                <Button variant="outline">비밀번호 변경</Button>
              </Flex>} 
            />

            <FormInput end={true} label={'전화번호'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <Select
                  w='80px'
                  placeholder="010"
                  data={['010', '011', '017', '016', '018', '019']}
                />
                <Text>-</Text>
                <TextInput w='80px' placeholder='2102'></TextInput>
                <Text>-</Text>
                <TextInput w='80px' placeholder='5873'></TextInput>
                <Button variant="outline">인증하기</Button>
              </Flex>} 
            />

            <FormInput  end={true} label={'프로필 사진'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <Button w={'100px'} h={'100px'} style={{ backgroundColor : '#A6A7AB' }} >IMAGE</Button>
                  <Flex direction={'column'} align={'start'} gap={'16px'}>
                    <Button variant="outline">파일 선택</Button>
                    <Flex direction={'column'}>  
                      <Text>JPG,GIF, PNG</Text>
                      <Text>권장 사이즈 128px, 최대 250KB</Text>
                    </Flex>
                  </Flex>  
              </Flex>} 
            />

                       
          </Flex>

          <Flex justify={'center'} mt={'24px'} gap={'24px'} direction={'row'}>
              <Button size='sm' variant='filled' color='#00B5C8'>수정하기</Button>
              <Button size='sm' variant='filled' color='gray.5' >취소</Button>
            </Flex>
        </Flex>  
      
    
      </Flex>
      
    </Flex>
    
    
  )
}

export default ProfilePanel;