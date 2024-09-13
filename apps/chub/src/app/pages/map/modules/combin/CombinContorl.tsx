import { IconPlus } from '@repo/ui';
import { useMapStore } from '../_stores';
import { SwitchButton } from '../_components';

export function CombinContorl() {
  const isCombin =  useMapStore( state => state.isCombin );
  const toggleCombin = useMapStore( state => state.toggleCombin );
  return (
    <SwitchButton 
      selected={isCombin} 
      onClick={()=>toggleCombin()} 
      leftSection={<IconPlus/>}
    >
      합필 하기
    </SwitchButton>
  )
}