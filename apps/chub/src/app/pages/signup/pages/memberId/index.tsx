import { Button, CloseButton, PasswordInput, Flex, TextInput } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TermsCard, PairBox } from '../../components';
import { FormBox, FormPage } from '@/components';


function MemberId() {
  const navigate = useNavigate();
  const [ id, setId ] = useState<string>('');

  return (
      <FormPage>
          <FormBox title='개인 정보 입력' >
            <PairBox>
              <TextInput
                flex={1}
                placeholder='이메일을 입력해주세요.' 
                label='이메일'
                value={id}
                onChange={(v)=>setId(v.target.value)} rightSection={ id === '' ? null :  <CloseButton  onClick={() => setId('')} />}
              />
              <Button variant='outline' size={'md'}>중복확인</Button>
            </PairBox>

            <TextInput placeholder='이름을 입력해주세요.' label='이름' />
            <Flex w={'100%'} direction={'column'} gap={'sm'}>
              <PasswordInput size={'md'} placeholder='비밀번호를 입력해주세요.' label='비밀번호' />
              <PasswordInput size={'md'} placeholder='비밀번호를 다시 입력해주세요.'/>
            </Flex>
            <PairBox>
              <TextInput flex={1} placeholder='휴대폰 번호를 입력해주세요.' label='휴대폰 번호' />
              <Button variant='outline' size={'md'}>인증요청</Button>
            </PairBox>
            <TermsCard w={'100%'}/>
            <Button onClick={()=>navigate('../company')} w={'100%'} size={'md'}>계속하기</Button>
          </FormBox>
      </FormPage>
  )
}

export default MemberId;