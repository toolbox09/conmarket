import { Flex, Button, TextInput, Title, Select, Text, Tabs, MonthPickerInput, rem, Box, Checkbox } from '@repo/ui';
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


export function CompanyaddPanel() {
    const w = 300;
    
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

          <FormInput  end={true} label={'사업자등록번호'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <TextInput w='50px' placeholder='123'></TextInput>
                <Text>-</Text>
                <TextInput w='40px' placeholder='45'></TextInput>
                <Text>-</Text>
                <TextInput w='70px' placeholder='67890'></TextInput>
              </Flex>} 
            />
            
            <FormInput end={true} label={'회사 홈페이지'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <TextInput w='200px' placeholder='www.conmarket.co.kr'></TextInput>
              </Flex>} 
            />

            <FormInput end={true} label={'업력'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <Text>2012년 12월</Text>
                <MonthPickerInput size="xs" valueFormat="YYYY년 MM월" placeholder="날짜 변경"/>
                {/* <Button size='xs' variant="outline">인증하기</Button> */}
              </Flex>} 
            />

            <FormInput end={true} label={'주력 건축 형태'} value={
              <Flex direction={'row'} gap={'16px'} align={'center'}>
                <Checkbox size='xs' label="단독주택" />
                <Checkbox size='xs' label="다세대, 다가구" />
                <Checkbox size='xs' label="상가건물" />
                <Checkbox size='xs' label="업무시설" />
              </Flex>} 
            />

            <FormInput end={true} label={'주력 건축 형태'} value={
              <Flex direction={'column'} gap={'8px'} align={'start'}>
                <Flex direction={'row'} gap={'8px'}>
                    <Checkbox size='xs' label="수도권" />
                    <Checkbox size='xs' label="대전·충청" />
                    <Checkbox size='xs' label="대구·경북" />
                    <Checkbox size='xs' label="부산·울산·경남" />
                </Flex>
                <Flex direction={'row'} gap={'8px'}>
                    <Checkbox size='xs' label="광주·전라" />
                    <Checkbox size='xs' label="강원영서" />
                    <Checkbox size='xs' label="강원영동" />
                    <Checkbox size='xs' label="제주도" />
                    <Checkbox size='xs' label="기타" />
                </Flex>
              </Flex>} 
            />

            <FormInput  end={true} label={'회사 로고'} value={
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
            

            <FormInput end={true} label={'소개'} value={
              <Flex  direction={'row'} gap={'16px'} align={'center'}>
                <TextInput w={'300px'} h={'100px'} ></TextInput>
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

export default CompanyaddPanel;