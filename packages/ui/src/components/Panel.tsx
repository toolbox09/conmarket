import { PropsWithChildren } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Box, FlexProps, Flex, ScrollArea, ScrollAreaProps } from '@mantine/core';

interface PanelBoxProps extends PropsWithChildren<FlexProps> {
}

function Scroll() {
    return function ( props : ScrollAreaProps ) {
        return <ScrollArea {...props} scrollbarSize={6} scrollHideDelay={1500} />
    };
};

function HeaderBox( { children ,...props } : PanelBoxProps ) {
    return <Box {...props} >{children}</Box>
}

function ContentBox( { children ,...props } : PanelBoxProps ) {
    return (
        <Box flex={1} {...props} >
            <AutoSizer>
            {({ height, width }) => {
                return (
                    <Flex w={width} h={height} component={Scroll()} {...props} >
                        {children}
                    </Flex >
                )
            }}
            </AutoSizer>
        </Box>
    )
}

function FooterBox( { children ,...props } : PanelBoxProps ) {
    return <Box {...props} >{children}</Box>
}

export const Panel = ( { children, ...props } : FlexProps ) => {
    return (
        <Flex direction={'column'} {...props}>
            {children}
        </Flex>
    )
}

Panel.Header = HeaderBox;
Panel.Content = ContentBox;
Panel.Footer = FooterBox;

