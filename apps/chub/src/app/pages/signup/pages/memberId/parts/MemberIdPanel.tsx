import { Flex, TextInput, PasswordInput, Checkbox, Button, Divider, CloseButton, FlexProps } from '@repo/ui';
import { useState } from 'react';
import { LogoTitle } from '@/components';




export function MemberIdPanel() {
    return (
        <Flex direction={'column'} w='100vw' h='100vh' style={{ backgroundColor : '#F1F3F5' }}>
            <Flex justify={'center'} flex={1} >
                <Singup/>
            </Flex>
        </Flex>
    )
}



function BBox( { children, ...props } : FlexProps) {
    return (
        <Flex direction={'row'} w={'100%'} align={'end'} justify={'space-between'} gap={'10px'} {...props}>
            {children}
        </Flex>
    )

}


function Singup() {

    const [ id, setId ] = useState<string>('');
  
      return (
        <Flex direction={'column'} align={'center'} mt={'80px'}>
            <LogoTitle/>
        <Flex align={'center'} direction={'column'} w={'440px'} p={'20px'} mt={'80px'} mb={'80px'} gap={'24px'} style={{ backgroundColor : '#fff', border : 'gray 1px solid' }} >
            <Flex justify={'start'} w={'100%'} direction={'column'}>
                <Flex mb={'16px'}>
                    <text style={{ fontWeight : 'bold', fontSize : '21px' }}>개인 정보 입력</text>
                </Flex>
                <Divider w={'100%'} ></Divider>    
            </Flex>
        <BBox>
            <TextInput 
                flex={1}
                size={'md'}
                placeholder='이메일을 입력해주세요.' 
                label='이메일'
                value={id}
                onChange={(v)=>setId(v.target.value)}rightSection={ id === '' ? null :  <CloseButton  onClick={() => setId('')} />
                } 
            />
                <Button variant='outline' size={'md'}>중복확인</Button>
        </BBox>
        
        <Flex w={'100%'} direction={'column'} gap={'sm'}>
            <PasswordInput size={'md'} placeholder='비밀번호를 입력해주세요.' label='비밀번호' />
        </Flex>
        <TextInput w={'100%'} size={'md'} placeholder='이름을 입력해주세요.' label='이름' />
        <BBox>
            <TextInput flex={1} size={'md'} placeholder='휴대폰 번호를 입력해주세요.' label='휴대폰 번호' />
            <Button variant='outline' size={'md'}>인증요청</Button>
        </BBox>
        <Flex w={'100%'} direction={'column'} gap={'8px'}>
            <Checkbox label='전체 동의' />
            <Divider w={'100%'}></Divider>
            <Checkbox label='만 14세 이상입니다.(필수)' />
            <Checkbox label='콘마켓 이용약관 동의(필수)' />
            <Checkbox label='콘마켓 개인정보 및 이용 동의(필수)' />
        </Flex>
        <Button w={'100%'} size={'md'}>계속하기</Button>
      </Flex>
      </Flex>
      )
  }