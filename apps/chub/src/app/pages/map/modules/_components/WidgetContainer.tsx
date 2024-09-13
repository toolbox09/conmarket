import { Paper, Flex ,FlexProps } from '@repo/ui';


export function WidgetContainer( { children, ...props  } : FlexProps  ) {
  return (
    <Paper className='shadow-md' >
      <Flex {...props} >
        {children}
      </Flex>
    </Paper>
  )
}