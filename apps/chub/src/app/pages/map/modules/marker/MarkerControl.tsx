import { useEffect, useMemo, useState } from 'react';
import { useScrollIntoView } from '@repo/react';
import { Flex, IconAdjustmentsHorizontal, Panel, ScrollArea, Box, ActionIcon, Center, Menu } from '@repo/ui';
// import { isExist } from '@repo/es';
import { useMarkerStore, MarkerType } from '../_stores';
import { SwitchButton } from '../_components';




function useAnchor( ...sectionIds : string[] ) {

  const [ currentId, setCurrentId  ] = useState<string>();

  function goto( id : string ) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach( (entry) => {
          if (entry.isIntersecting  ) {
            console.log(entry);
            setCurrentId(entry.target.id);
          }
        })
      },
      {
        // root : null, // document.getElementById(rootId),
        // rootMargin: '0px',
        // threshold:  // 섹션의 60%가 뷰포트에 들어오면 감지
      }
    )

    sectionIds.forEach((id : string) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id :  string) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };

  },[])

  return {
    currentId,
    goto
  }
}


function FilterPanel() { 

  const { currentId, goto } = useAnchor('section1','section2','section3');

  return (
    <Panel h={500} w={400}>
      <Panel.Header>
        {currentId}
        <nav>
          <button onClick={() => goto('section1')}>Section 1</button>
          <br />
          <button onClick={() => goto('section2')}>Section 2</button>
          <br />
          <button onClick={() => goto('section3')}>Section 3</button>
        </nav>
      </Panel.Header>
      <Panel.Content>
        <div id={'root-id'} >
          <div id="section1" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
            <h2>Section 1</h2>
            <p>Content of Section 1</p>
          </div>
          <div id="section2" style={{ height: '100vh', backgroundColor: '#d9d9d9' }}>
            <h2>Section 2</h2>
            <p>Content of Section 2</p>
          </div>
          <div id="section3" style={{ height: '100vh', backgroundColor: '#bfbfbf' }}>
            <h2>Section 3</h2>
            <p>Content of Section 3</p>
          </div>
        </div>
      </Panel.Content>
      <Panel.Footer>
        adasd
      </Panel.Footer>
      </Panel>
  )
}


export function MarkerControl() {
  const types =  useMarkerStore( state => state.types );
  const toggleType =  useMarkerStore( state => state.toggleType );
  const [ filtered, setFiltered ] = useState<boolean>(false);

  function button( type : MarkerType, name : string ) {
    const selectd = types.isExist( _ => _ === type );
    return <SwitchButton w={96} selected={selectd} color={selectd ? undefined : 'gray'} onClick={()=>toggleType(type)} >{name}</SwitchButton>
  }
  return (
    <Flex gap='xs' align={'center'} >
      {button('TRADE', '실거래')}
      {button('ITEM', '매매')}
      <Center bg='#fff' >
      <Menu opened={filtered} position='bottom-end' >
        <Menu.Target>
          <ActionIcon className='shadow-md' variant={filtered ? 'filled' : 'outline'} size={'lg'}  color={ filtered ? undefined : 'gray'} onClick={()=>setFiltered( prev=>!prev )} >
            <IconAdjustmentsHorizontal stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <FilterPanel/>
        </Menu.Dropdown>
      </Menu>
      </Center>
    </Flex>
  )
}