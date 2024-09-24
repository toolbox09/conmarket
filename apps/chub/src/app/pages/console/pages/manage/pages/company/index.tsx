import { Flex } from '@repo/ui';
import { CompanyPanel } from './parts/CompanyPanel';
import { CompanyaddPanel } from './parts/CompanyaddPanel';
import { ProfilePanel } from './parts/ProfilePanel';

function Company() {
  return (

    <Flex flex={1} >
      <CompanyPanel/>
      
    </Flex>
    )
}

export default Company;