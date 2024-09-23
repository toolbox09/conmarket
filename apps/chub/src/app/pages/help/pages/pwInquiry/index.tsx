import { TextInput, Button, Text, IconUser } from '@repo/ui';
import { FormPage, FormBox } from '@/components';


function PwInquiry() {
  return (
    <FormPage w='100vw' h='100vh' >
      <Text mt='lg' size='lg' >비밀번호를 찾고자하는 이메일을 입력해주세요.</Text>
      <FormBox>
        <TextInput size='md' placeholder='이메일을 입력해주세요.' leftSection={<IconUser/>} />
        <Button size='md'>다음</Button>
      </FormBox>
    </FormPage>
  )
}

export default PwInquiry;