import { useNavigate } from 'react-router-dom';
import { Flex, FlexProps, Text } from '@repo/ui';
import { Logo } from './Logo';

export function LogoTitle( props : FlexProps ) {
    const navigate = useNavigate();
    return (
        <Flex {...props} align={'center'} gap='2px'  style={{ cursor : 'pointer' }} onClick={()=>navigate('/')}  >
            <Logo w={'2rem'} />
            <Text fw='bold' size='18px' >ConMarket</Text>
        </Flex>
    )
}