import { PropsWithChildren } from 'react';
import { MantineProvider, DatesProvider, Button, TextInput, PasswordInput,Text, generateColors } from '@repo/ui';

import './MantineThemeProvider.scss';
import 'dayjs/locale/ko';


// const theme = generateColors('#000');
const adminChubColors = {
  // adminChub : theme,
  adminChub : [
    '#bbb',
    '#aaa',
    '#999',
    '#888',
    '#777',
    '#666',
    '#555',
    '#444',
    '#333',
    '#222',
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
              size : 'xs',
            }
          }),
          PasswordInput : PasswordInput.extend({
            defaultProps : {
              size : 'xs',
            }
          }),
          Button : Button.extend({
            defaultProps : {
              size : 'xs',
            }
          }),
          Text : Text.extend({
            defaultProps : {
              size : 'sm',
            }
          })
        },
      }}
    >
      <DatesProvider settings={{ locale : 'ko' }} >
        {children}
      </DatesProvider>
    </MantineProvider>
  )
}