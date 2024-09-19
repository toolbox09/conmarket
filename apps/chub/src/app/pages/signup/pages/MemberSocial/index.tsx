import { TextInput, Button, CloseButton } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TermsCard, PairBox } from '../../components';
import { FormBox, FormPage } from '@/components';


function MemberSocial() {
  const navigate = useNavigate();
  const [ id, setId ] = useState<string>('');

  return (
      <FormPage>
          <FormBox title='개인 정보 입력' >
              <TextInput
                  size={'md'}
                  placeholder='이메일을 입력해주세요.' 
                  label='이메일'
                  value={id}
                  onChange={(v)=>setId(v.target.value)} rightSection={ id === '' ? null :  <CloseButton  onClick={() => setId('')} />
                  } 
              />
              <TextInput w={'100%'} size={'md'} placeholder='이름을 입력해주세요.' label='이름' />
              <PairBox>
                  <TextInput flex={1} size={'md'} placeholder='휴대폰 번호를 입력해주세요.' label='휴대폰 번호' />
                  <Button variant='outline' size={'md'}>인증요청</Button>
              </PairBox>
              <TermsCard w={'100%'}/>
              <Button onClick={()=>navigate('../company')} w={'100%'} size={'md'}>계속하기</Button>
          </FormBox>
      </FormPage>
  )
}

export default MemberSocial;