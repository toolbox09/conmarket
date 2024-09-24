import { Text } from '@repo/ui';
import { FormPage, FormBox, VerificationCodeInput } from '@/components';


function IdInquiry() {
  return (
    <FormPage w='100vw' h='100vh' >
      <Text mt='lg' size='lg' >비밀번호를 찾고자하는 이메일을 입력해주세요.</Text>
      <FormBox>
        <VerificationCodeInput/>
      </FormBox>
    </FormPage>
  )
}

export default IdInquiry;