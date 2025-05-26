import {useState} from 'react';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcept.jsx'
import TabButton from './Components/TabButton.jsx';






function App() {
const[selectedTopic, setSelectedTopic] = useState();
function selectHandler(Selectedbutton){
setSelectedTopic(Selectedbutton);
console.log(Selectedbutton);
  }
  return (
    <div>
      {/*<Header></Header>*/}
      <Header />{/*or self closing tag */ }

      <main>
        <h2>Core Concepts</h2>
        <section id = "core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
  <CoreConcept key={conceptItem.title} {...conceptItem} />
))}

          
          </ul>
        </section>
        <section id = "examples">
          <h2> EXAMPLE </h2>
          <menu>
          <TabButton isSelected={selectedTopic === 'components'} 
          onSelect= {()=> selectHandler("components")}> Component </TabButton>

          <TabButton isSelected={selectedTopic === 'jsx'}  
          onSelect= {()=> selectHandler("jsx")}> JSX </TabButton>

          <TabButton isSelected={selectedTopic === 'props'} 
          onSelect= {()=> selectHandler("props")}> Prop </TabButton>

          <TabButton isSelected={selectedTopic === 'state'}  
          onSelect= {()=> selectHandler("state")}> State </TabButton>

          </menu>
          {!selectedTopic ? <p>Please select a topic</p> :  <div id = "tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div> }
         
        </section>
      </main>
    </div>
  );
}

export default App;
