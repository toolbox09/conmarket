import { Flex } from '@repo/ui';
import { CompanyPanel } from './parts/CompanyPanel';


function Company() {
  return (
    <Flex w='100vw' h='100vh' >
      <CompanyPanel/>
    </Flex>
  )
}

export default Company;