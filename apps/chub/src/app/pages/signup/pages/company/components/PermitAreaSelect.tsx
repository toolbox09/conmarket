import { useState  } from 'react';
import { MultiSelect } from '@repo/ui';

export function PermitAreaSelect() {

  const [value, setValue] = useState<string[]>([]);

  return (
    <MultiSelect
      size='md'
      label="주 인허가지역"
      placeholder={ value.length > 0 ? '' : '주 인허가 지역을 선택하세요.' }
      value={value} onChange={setValue}
      data={['수도권', '대전·충청', '대구·경북', '부산·울산·경남', '광주·전라', '강원영서', '강원영동', '제주도', '기타']}
    />
  );
}