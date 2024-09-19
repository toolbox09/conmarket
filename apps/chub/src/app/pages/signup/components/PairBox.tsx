import { FlexProps, Flex } from '@repo/ui';


export function PairBox( { children, ...props } : FlexProps) {
  return (
      <Flex direction={'row'} w={'100%'} align={'end'} justify={'space-between'} gap={'10px'} {...props}>
          {children}
      </Flex>
  )
}
