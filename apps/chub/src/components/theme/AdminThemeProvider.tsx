import { PropsWithChildren } from 'react';
import { MantineProvider, DatesProvider, Button, TextInput, PasswordInput } from '@repo/ui';

import './MantineThemeProvider.scss';
import 'dayjs/locale/ko';


const adminChubColors = {
  adminChub : [
    '#999',
    '#888',
    '#777',
    '#666',
    '#555',
    '#444',
    '#333',
    '#222',
    '#111',
    '#000',
  ]
};

export function AdminThemeProvider( { children } : PropsWithChildren ) {
  return (
    <MantineProvider
      theme={{
        radius : {
          xs: '0px',
          sm: '0px',
          md: '0px',
          lg: '0px',
          xl: '0px',
        },
        colors: adminChubColors as any, 
        primaryColor: 'adminChub', 
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