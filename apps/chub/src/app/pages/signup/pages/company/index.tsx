import { Flex, Button, Textarea, MonthPickerInput, TextInput } from '@repo/ui';
import { FormPage, FormBox } from '@/components';
import { BusinessRegistrationUpload, BuildingUseSelect, PermitAreaSelect } from './components';
import { PairBox } from '../../components';




function Company() {
  return (
    <FormPage h='100%' style={{ overflowX : 'hidden'  }}  >
      <FormBox title='회사 정보 입력' >
        <TextInput placeholder='회사명을 입력해주세요.' label='회사명' />
        <TextInput placeholder='대표자명을 입력해주세요.' label='대표자명' />
        <TextInput placeholder='사업자등록번호를 입력해주세요.' label='사업자 등록번호' />
        <BusinessRegistrationUpload/>
        <Flex direction={'column'} gap={'xs'} >
          <PairBox>
            <TextInput flex={1} placeholder='' label='회사주소' />
            <Button variant='outline' size='md'  >주소 검색</Button>
          </PairBox>
          <TextInput/>
        </Flex>
        <TextInput placeholder='회사 전화번호를 입력해주세요.' label='전화번호' />
        <MonthPickerInput size='md' valueFormat="YYYY년 MM월" label="업력(등록일)"/>
        <BuildingUseSelect/>
        <PermitAreaSelect/>
        <TextInput placeholder='회사 홈페이지를 입력해주세요.' label='홈페이지' />
        <Textarea size='md' label='회사소개' />
      </FormBox>
    </FormPage>
  )
}

export default Company;