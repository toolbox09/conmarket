import { useNavigate } from 'react-router-dom';
import { Flex, FlexProps, UnstyledButton, Button } from '@repo/ui';
import { usePath } from '@repo/react';
import { LogoTitle } from '../internal';
import classes from './LandingLayout.module.scss';

// function Link
function LandingHeader() {
    const navigate = useNavigate();
    const currentPath = usePath(0);

    function Link( { label, path } : { label : string, path : string } ) {
        return (
            <UnstyledButton 
                p='md' 
                className={classes.link} 
                data-selected={path === currentPath}
                onClick={()=>navigate(`/${path}`)}
            >
                {label}
            </UnstyledButton>
        )
    }

    return (
        <Flex direction={'row'} justify={'space-between'} align={'center'} w={'100%'} h={'80px'} className='bdb' px='16px' py='22px'  >
            <Flex gap={'80px'} >
                <LogoTitle/>
                <Flex gap={'40px'}>
                    <Link label='지도' path='map' />
                    <Link label='건축사 찾기' path='search'  />
                </Flex>
            </Flex>

            <Flex gap={'24px'} align={'center'} >
                <Button className='shadow-md' onClick={()=>navigate('/signup')} >건축사 등록</Button>
                <Button className='shadow-md' onClick={()=>navigate('/console')} variant='outline' >기업 서비스</Button>
            </Flex>
        </Flex>
    );
}

interface LandingLayoutProps extends FlexProps {
}

export function LandingLayout( { children, ...props} : LandingLayoutProps ) {
    return (
        <Flex {...props}  direction={'column'} >
            <LandingHeader/>
            {children}
        </Flex>
    )
}