import { Flex, TextInput, Checkbox, Button, Divider, FileInput, FlexProps, PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@repo/ui';
import { MonthPickerInput } from '@repo/ui';
import {} from 'dayjs';
import { useState } from 'react';
import { LogoTitle } from '@/components';




export function CompanyPanel() {
    return (
        <Flex direction={'column'} w='100vw' h='100vh' style={{ backgroundColor : '#F1F3F5' }} >
          
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

const residence = ['수도권', '대전·충청', '대구·경북', '부산·울산·경남', '광주·전라', '강원영서', '강원영동', '제주도', '기타'];

function Residence() {
    const combobox = useCombobox({
      onDropdownClose: () => combobox.resetSelectedOption(),
      onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });
  
    const [search, setSearch] = useState('');
    const [value, setValue] = useState<string[]>([]);
  
    const handleValueSelect = (val: string) =>
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
  
    const handleValueRemove = (val: string) =>
      setValue((current) => current.filter((v) => v !== val));
  
    const values = value.map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));
  
    const options = residence
      .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
      .map((item) => (
        <Combobox.Option value={item} key={item} active={value.includes(item)}>
          <Group gap="sm">
            {value.includes(item) ? <CheckIcon size={12} /> : null}
            <span>{item}</span>
          </Group>
        </Combobox.Option>
      ));
  
    return (
      <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
        <Combobox.DropdownTarget>
          <PillsInput onClick={() => combobox.openDropdown()}>
            <Pill.Group>
              {values}
  
              <Combobox.EventsTarget>
                <PillsInput.Field
                  onFocus={() => combobox.openDropdown()}
                  onBlur={() => combobox.closeDropdown()}
                  value={search}
                  placeholder="주 인허가 지역을 선택해주세요."
                  onChange={(event) => {
                    combobox.updateSelectedOptionIndex();
                    setSearch(event.currentTarget.value);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace' && search.length === 0) {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>
  
        <Combobox.Dropdown>
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    );
  }


function Singup() {


    const [value, setValue] = useState<Date | null>(null);
    
    



      
      return (
        <Flex direction={'column'} align={'center'} mt={'80px'}>
        <LogoTitle/>
        <Flex align={'center'} direction={'column'} w={'440px'} p={'20px'} mt={'80px'} mb={'80px'} gap={'24px'} style={{ backgroundColor : '#fff',  border : 'gray 1px solid' }} >
        <Flex justify={'start'} w={'100%'} direction={'column'}>
            <Flex mb={'16px'}>
                <text style={{ fontWeight : 'bold', fontSize : '21px' }}>기업 정보 입력</text>
            </Flex>
            <Divider w={'100%'} ></Divider>    
        </Flex>
        
        <TextInput w={'100%'} size={'md'} placeholder='회사명을 입력해주세요.' label='회사명' />
        <TextInput w={'100%'} size={'md'} placeholder='대표자명을 입력해주세요.' label='대표자명' />
        <TextInput w={'100%'} size={'md'} placeholder='사업자등록번호를 입력해주세요.' label='사업자 등록번호' />
        <FileInput w={'100%'} label='사업자 등록증 업로드' ></FileInput>
        <Flex w={'100%'} direction={'column'} gap={'4px'}>
            <BBox>
                <TextInput flex={1} size={'md'} placeholder='우편번호' label='회사 주소' disabled/>
                <Button variant='outline' size={'md'}>주소검색</Button>
            </BBox>
            <TextInput w={'100%'} size={'md'} placeholder='주소' disabled/>
            <TextInput w={'100%'} size={'md'} placeholder='상세주소' />
        </Flex>
        <TextInput w={'100%'} size={'md'} placeholder='회사 전화번호를 입력해주세요.' label='회사 전화번호' />
        <Flex w={'100%'}>
            <MonthPickerInput
            label="업력(등록년월)"
            placeholder="날짜 선택"
            value={value}
            onChange={setValue}
            />
        </Flex>
                
        <Flex direction={'column'} w={'100%'} gap={'xs'}>
            <text>주력건축 형태</text> 
            <Flex direction={'row'} gap={'lg'} >
                <Checkbox label='단독주택' />
                <Checkbox label='다세대, 다가구' />
            </Flex>    
            <Flex direction={'row'} gap={'lg'} >
                <Checkbox label='상가건물' />
                <Checkbox label='업무시설' />
            </Flex>            
        </Flex>

        <Flex w={'100%'} direction={'column'}>
            <text>주 인허가지역</text>
            <Residence />
        </Flex>

        <TextInput w={'100%'} size={'md'} placeholder='홈페이지 주소를 입력해주세요.' label='홈페이지' />
        <TextInput w={'100%'} size={'md'} placeholder='회사소개를 입력해주세요.' label='회사소개' />

        <Button w={'100%'} size={'md'}>회원가입 완료</Button>
        
       
  
         
      </Flex>
      
      </Flex>
      )
  }