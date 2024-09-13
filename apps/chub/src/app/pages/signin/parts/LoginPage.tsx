import { Flex, TextInput, PasswordInput, Checkbox, Button, Divider, UnstyledButton, CloseButton, Center } from '@repo/ui';
import { Icon360View, IconCircleLetterC } from '@repo/ui';
import { useState } from 'react';

export function LoginPage() {
    const [ id, setId ] = useState<string>('');
      
    return (
    <Flex w='100%' h='100%' component={Center}  >
        <Flex align={'center'} direction={'column'} w={'400px'} mt={'80px'} gap={'24px'} >
            <TextInput w={'100%'}
            size={'md'}
            placeholder='이메일을 입력해주세요.' 
            label='이메일'
              value={id}
              onChange={(v)=>setId(v.target.value)}
              rightSection={
                <CloseButton            
                  onClick={() => setId('')}
                  style={{ display: id === '' ? 'none' : undefined  }}
                />
              } />
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
              <Button size={'md'} color={'dark.0'}>로그인</Button>
              <Flex direction={'row'} gap={'lg'}>
                <UnstyledButton style={{ fontSize : '14px' }}>회원가입</UnstyledButton>
                <Divider size={'sm'} orientation={'vertical'} />
                <UnstyledButton style={{ fontSize : '14px' }}>아이디 찾기</UnstyledButton>
                <Divider size={'sm'} orientation={'vertical'} />
                <UnstyledButton style={{ fontSize : '14px' }}>비밀번호 찾기</UnstyledButton>
              </Flex>
            </Flex>
            <Divider w={'100%'} label='소셜 계정으로 로그인하기' ></Divider>
            <Button leftSection={<Icon360View size={24} />} w={'100%'} size={'md'} color='#2DB400' >네이버 계정으로 계속하기</Button>
            <Button leftSection={<IconCircleLetterC size={24} />} w={'100%'} size={'md'} color='#FEE500' >카카오 계정으로 계속하기</Button>
            <Flex>
              
            </Flex>
            
      
      
             
          </Flex>
    </Flex>
    )
}