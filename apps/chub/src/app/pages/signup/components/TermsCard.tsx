import { forwardRef, useMemo, useEffect, useImperativeHandle } from 'react';
import { Flex, Checkbox, Divider, FlexProps, useForm } from '@repo/ui';




interface TermsCardHandle {
  getAgree: () => boolean;
}

export interface TermsCardProps extends FlexProps {
  onChangeed? : () => void;
} 

export const TermsCard = forwardRef<TermsCardHandle, TermsCardProps>( (props, ref) => {

  const form = useForm({
      initialValues : {
          agreeOfAll : false,
          agreeOf14 : false,
          agreeOfService : false,
          agreeOfPrivacy : false,
      }
  })

  const allChecked = useMemo(()=>{
      return form.values.agreeOf14 && form.values.agreeOfService && form.values.agreeOfPrivacy;
  },[form.values.agreeOf14,form.values.agreeOfService, form.values.agreeOfPrivacy]);

  useEffect(()=>{
      form.setFieldValue('agreeOfAll', allChecked);
  },[allChecked])

  useImperativeHandle(ref, () => ({
      getAgree() {
        return allChecked;
      }
  }));

  function handleAllTermsChange(value : boolean)  {
      form.setValues({
          agreeOfAll : value,
          agreeOf14 : value,
          agreeOfService : value,
          agreeOfPrivacy : value,
      });
      if(props.onChangeed) {
        props.onChangeed();
      }
  }

  function handleIndividualTermChange(field : string, value : boolean ) {
      form.setFieldValue(field, value);
  };


  return (
      <Flex  {...props} gap={'8px'}  direction={'column'} >
          <Checkbox checked={form.values.agreeOfAll} label='전체동의' onChange={(event) => handleAllTermsChange(event.currentTarget.checked)}/>
          <Divider/>
          <Checkbox checked={form.values.agreeOf14} onChange={(event) => handleIndividualTermChange('agreeOf14', event.currentTarget.checked)} label='만 14세 이상입니다.(필수)' />
          <Checkbox checked={form.values.agreeOfService} onChange={(event) => handleIndividualTermChange('agreeOfService', event.currentTarget.checked)} label='콘마켓 이용약관 동의 (필수)' />
          <Checkbox checked={form.values.agreeOfPrivacy} onChange={(event) => handleIndividualTermChange('agreeOfPrivacy', event.currentTarget.checked)} label='콘마켓 개인정보 수집 및 이용 동의 (필수)' />
      </Flex>
  )
});