import { Flex, TextInput, PasswordInput, Checkbox, Button, Divider, UnstyledButton, CloseButton, Image } from '@repo/ui';
import { useKakaoLogin, useNaverLogin } from '@repo/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormPage, FormBox } from '@/components';

export function LoginPage() {
    const [ id, setId ] = useState<string>('');
    const navigate = useNavigate();
    const kakao = useKakaoLogin({
      url : import.meta.env.VITE_KAKAO_JDK_KEY,
      onSuccess : ( value ) => {
        console.log(value);
      }
    });

    const naver = useNaverLogin({
      url : import.meta.env.VITE_NAVER_JDK_KEY,
      callbackUrl : 'https://localhost:5175/callback/naver',
      onSuccess : ( value ) => {
        console.log(value);
      }
    })
      
    return (
    <FormPage >
      <FormBox >
        <TextInput w={'100%'}
          size={'md'}
          placeholder='이메일을 입력해주세요.' 
          label='이메일'
          value={id}
          onChange={(v)=>setId(v.target.value)}
          rightSection={<CloseButton onClick={() => setId('')} style={{ display: id === '' ? 'none' : undefined  }}/>} 
        />
        <Flex w={'100%'} direction={'column'} gap={'sm'}>
          <PasswordInput
            size={'md'}
            placeholder='비밀번호를 입력해주세요.'
            label='비밀번호' 
          />
          <Flex w={'100%'} direction={'row'} gap={'md'}>
            <Checkbox size='sm' label='로그인 유지' />
            <Checkbox size='sm' label='아이디 저장' />
          </Flex>
        </Flex>            
        <Flex w={'100%'} direction={'column'} gap={'8px'}>
          <Button size={'md'} >로그인</Button>
          <Flex direction={'row'} gap={'lg'}>
            <UnstyledButton style={{ fontSize : '14px' }} onClick={()=>navigate('/signup')}  >회원가입</UnstyledButton>
            <Divider size={'sm'} orientation={'vertical'} />
            <UnstyledButton style={{ fontSize : '14px' }} onClick={()=>navigate('/help/idInquiry')}>아이디 찾기</UnstyledButton>
            <Divider size={'sm'} orientation={'vertical'} />
            <UnstyledButton style={{ fontSize : '14px' }} onClick={()=>navigate('/help/pwInquiry')}>비밀번호 찾기</UnstyledButton>
          </Flex>
        </Flex>
        <Divider w={'100%'} mt='lg'  label='간편 로그인' ></Divider>
        <Flex gap='xl'  justify={'center'}  >
          <Image onClick={()=>naver.login()} w={40} style={{ cursor : 'pointer' }} src={'https://i.incru.it/ui/static/image/edit/sns_login_naver_v2.svg'} />
          <Image onClick={()=>kakao.login()} w={40} style={{ cursor : 'pointer' }} src={'https://i.incru.it/ui/static/image/edit/sns_login_kakao_v2.svg'} />
        </Flex>
      </FormBox>
    </FormPage>
    )
}

/*
https://i.incru.it/ui/static/image/edit/sns_login_kakao_v2.svg
*/