import { Flex, Button, TextInput, Title, Select, Text, Tabs } from '@repo/ui';
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


export function CompanyPanel() {
    
  return (
    
    <Flex direction={'column'} w={'100%'} style={{ backgroundColor : '#F8F9FA' }}>
      <Flex direction={'column'} gap={'24px'} p='xl'>
        <Title order={3} >기업정보 관리</Title>
        
        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">
              기업 기본정보
            </Tabs.Tab>
            <Tabs.Tab value="messages">
              기업 추가정보
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Flex p={'40px'} direction={'column'} style={{ background : 'white' }}>
          <Flex direction={'column'} style={{ borderTop : 'solid 2px black', borderBottom : 'solid 2px black' }}>

            <FormInput label={'회사명'} value={'수성엔지니어링'} />
            <FormInput label={'대표자명'} value={'홍길동'} />
            
            
            <FormInput end={true} label={'주소검색'} value={
              <Flex direction={'column'} gap={'8px'}>
                
                <Flex  direction={'row'} gap={'16px'} align={'center'}>
                  <TextInput w='60px' placeholder='05836' disabled></TextInput>
                  <Button variant="outline">주소검색</Button>
                </Flex>
                
                <Flex  direction={'row'} gap={'16px'} align={'center'}>
                  <TextInput w='350px' placeholder='서울 송파구 정의로8길 13 (문정동, 수성위너스)' disabled></TextInput>
                  <TextInput w='350px' placeholder='4층'></TextInput>
                </Flex>

              </Flex>}
            />

            <FormInput end={true} label={'전화번호'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <Select
                  w='80px'
                  placeholder="02"
                  data={['02', '031', '032', '033', '041', '042', '043', '044', '051','052','053','054','055', '061','062', '063', '064', '070']}
                />
                <Text>-</Text>
                <TextInput w='80px' placeholder='2102'></TextInput>
                <Text>-</Text>
                <TextInput w='80px' placeholder='5873'></TextInput>
                {/* <Button variant="outline">인증하기</Button> */}
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

export default CompanyPanel;