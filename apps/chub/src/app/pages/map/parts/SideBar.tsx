import { Panel } from '@repo/ui';


function FilterPanel() { 

  return (
    <Panel h={500} w={400}>
      <Panel.Header>
        <nav>
          <button>Section 1</button>
          <button>Section 2</button>
          <button>Section 3</button>
        </nav>
      </Panel.Header>
      <Panel.Content id={'root-id'} >
        <div>
        <section id="section1" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
          <h2>Section 1</h2>
          <p>Content of Section 1</p>
        </section>
        <section id="section2" style={{ height: '100vh', backgroundColor: '#d9d9d9' }}>
          <h2>Section 2</h2>
          <p>Content of Section 2</p>
        </section>
        <section id="section3" style={{ height: '100vh', backgroundColor: '#bfbfbf' }}>
          <h2>Section 3</h2>
          <p>Content of Section 3</p>
        </section>
        </div>
      </Panel.Content>
      <Panel.Footer>
        adasd
      </Panel.Footer>
      </Panel>
  )
}

export function SideBar() {
  return (
    <FilterPanel/>
  )
}
