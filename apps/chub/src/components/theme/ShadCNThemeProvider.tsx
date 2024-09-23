import { PropsWithChildren } from 'react';
import { MantineProvider, DatesProvider, Button, TextInput, PasswordInput } from '@repo/ui';

import './MantineThemeProvider.scss';
import 'dayjs/locale/ko';


const shadcnColors = {
  shadcn : [
    '#444',
    '#444',
    '#333',
    '#333',
    '#222',
    '#222',
    '#111',
    '#111',
    '#000',
    '#000',
  ]
};

export function ShadCNThemeProvider( { children } : PropsWithChildren ) {
  return (
    <MantineProvider
    theme={{
      shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        soft: '0 5px 15px rgba(0, 0, 0, 0.05)',
      },
      radius : {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '100px',
      },
      colors: shadcnColors as any, 
      primaryColor: 'shadcn', 
      autoContrast : true,
      fontFamily : `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;`,
      components : {
        TextInput : TextInput.extend({
          defaultProps : {
            size : 'md',
          }
        }),
        PasswordInput : PasswordInput.extend({
          defaultProps : {
            size : 'md',
          }
        }),
        Button : Button.extend({
          defaultProps : {
            size : 'md',
          }
        }),
      },
    }}
    >
      <DatesProvider settings={{ locale : 'ko' }} >
        {children}
      </DatesProvider>
    </MantineProvider>
  )
}