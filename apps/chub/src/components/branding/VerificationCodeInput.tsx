import { useEffect, useMemo, useState } from 'react';
import { phoneNumber as toPhoneNumber } from '@repo/es';
import { Flex, FlexProps, TextInput, Button, useInputState } from '@repo/ui';


interface VerificationCodeInputProps extends FlexProps {
  onSuccess? : ( ci : string, di : string ) => void;
}

export function VerificationCodeInput( { onSuccess, ...props } : VerificationCodeInputProps ) {

  const buttonWidth = 140;
  const [ isRequest, setIsRequest ] = useState<boolean>(false);
  const [ phoneNumber, setPhoneNumber ] = useInputState<string>('');
  const [ validateNumber, setValidateNumber ] = useInputState<string>('');


  const phoneNumbervalidate = useMemo(()=>{
    return  /^\d{10,15}$/.test((''+phoneNumber).replace(/\D/g, '')) ? true : false;
  },[phoneNumber])

  function handlePhoneNumberChange( value : string ) {
    setPhoneNumber(toPhoneNumber(value));
    if(isRequest) {
      setIsRequest(false);
    }
  }

  return (
    <Flex {...props} direction={'column'} gap='xs' >
      <Flex direction={'row'} align={'end'} gap='xs' >
        <TextInput 
          flex={1} 
          placeholder='휴대폰 번호를 입력해주세요.'  
          value={phoneNumber}
          onChange={ ( value ) => {
            handlePhoneNumberChange(value.target.value);
          } }
          inputMode="numeric"
          // error={'asdsad'} 
          label='휴대폰 번호'
        />
        { isRequest ? 
          <Button w={buttonWidth} disabled={!phoneNumbervalidate} variant='outline' >번호 재발송</Button> : 
          <Button w={buttonWidth} disabled={!phoneNumbervalidate} onClick={()=>setIsRequest(true)} variant='outline' >인증번호 발송</Button> }
      </Flex>
      {
        isRequest &&  
        <Flex direction={'row'} gap='xs' >
          <TextInput flex={1} placeholder='인증 번호를 입력해주세요.' 
            inputMode="numeric"
            type='number'
          />
          <Button w={buttonWidth} variant='outline'  >인증</Button>
        </Flex>
      }

    </Flex>
  )
}