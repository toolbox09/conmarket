import { useNavigate } from 'react-router-dom';
import { Flex, FlexProps, Text } from '@repo/ui';
import { Logo } from './Logo';


interface LogoTitleProps extends FlexProps {
    size? : string;
}

export function LogoTitle( { size, ...props} : LogoTitleProps ) {
    const navigate = useNavigate();
    return (
        <Flex {...props} align={'center'} gap='2px'  style={{ cursor : 'pointer' }} onClick={()=>navigate('/')}  >
            <Logo w={'2rem'} />
            <Text fw='900' size={ size ?? '30px'} >CONMARKET</Text>
        </Flex>
    )
}
// var(--mantine-color-chub-text)