import { Button, ButtonProps, Paper } from '@repo/ui';
import { DOMAttributes } from 'react';

type SwitchButtonProps = ButtonProps & DOMAttributes<any> & {
  selected : boolean;
}

export function SwitchButton( { selected,  ...props } : SwitchButtonProps ) {
  return <Paper className='shadow-md'><Button  variant={ selected ? 'filled' : 'outline' } {...props} /></Paper>
}
