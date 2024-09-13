import { PropsWithChildren } from 'react';
import { MantineProvider } from '@repo/ui';
import './MantineThemeProvider.scss';


const chubColors = {
  chub : [
    '#e1f9fc',
    '#b8f0f8',
    '#8fe8f5',
    '#66dff1',
    '#3dd7ee',
    '#34CFE3',
    '#2ebacc',
    '#28a5b6',
    '#228f9f',
    '#1b7a89',
  ]
};

export function MantineThemeProvider( { children } : PropsWithChildren ) {
  return (
    <MantineProvider
      theme={{
        colors: chubColors as any, 
        primaryColor: 'chub', 
        autoContrast : true,
        fontFamily : `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;`,
      }}
    >
      {children}
    </MantineProvider>
  )
}