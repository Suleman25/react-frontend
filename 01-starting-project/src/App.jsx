import CoreConcept from './CoreConcept';
import image from './assets/components.png';
import image1 from'./assets/config.png';
import image2 from'./assets/jsx-ui.png';
import image3 from'./assets/react-core-concepts.png';
import TabButton from'./component/TabButton/TabButton';
import { CORE_CONCEPTS , EXAMPLES } from './data';
import { useState } from 'react';



function App() {
  const [selectedTopic ,setselectedTopic] = useState();
  let dynamicContent = selectedTopic
  const xyz =(abc)=>{
    setselectedTopic(abc)
    dynamicContent=selectedTopic;
    console.log (abc)
    

  }
  return (
    <div>

      
      <main>
        <section id="core-concepts">
          <h2>core concept</h2>
          <ul>
          {/* <CoreConcept  image={image}  title="fundamental" description="xyz"/>
          <CoreConcept  image={image1}  title="frontend" description="xyz" />
          <CoreConcept  image={image2}  title="javascript" description="xyz"/>
          <CoreConcept  image={image3}  title="react concept" description="xyz"/>  */}
          {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          
           {CORE_CONCEPTS.map(
            (concept,i)=>(
              <CoreConcept key={i}{...concept}/>
            )
          )
           }
          </ul>
        </section>

        
        {/* <section id="examples" >
          <h2>Examples</h2>
          
          <menu>
            <TabButton select = {()=>{xyz('frontend')}} >frontend</TabButton>
            <TabButton select = {()=>{xyz('backend')}} >backend</TabButton>
            <TabButton select = {()=>{xyz('react js')}}>react js</TabButton>
            <TabButton select = {()=>{xyz('node js')}}>node js</TabButton>
          </menu>

          </section> */}
          <section id="examples" >
          <h2>Examples</h2>
          
          <menu>
            <TabButton isSelect ={selectedTopic === 'components'} select = {()=>{xyz('components')}} >components</TabButton>
            <TabButton isSelect ={selectedTopic === 'jsx'} select = {()=>{xyz('jsx')}} >jsx</TabButton>
            <TabButton isSelect ={selectedTopic === 'props'} select = {()=>{xyz('props')}}>props</TabButton>
            <TabButton isSelect ={selectedTopic === 'state'} select = {()=>{xyz('state')}}>state</TabButton>
          </menu>

          { !selectedTopic  ? <p>Please select a button</p> :
                  <div id='tab-content' >
                  <h3>{EXAMPLES[selectedTopic].title}</h3>   
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
              </div> 
               }      
      

          </section> 
      </main>
      {/* <div id='tab-content' >
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div> */}


        {/* <section id="examples" >
          <h2>Examples</h2>
          
          <menu>
            <TabButton select = {xyz} >JUICE</TabButton>
            <TabButton select = {xyz} >PILA DO</TabButton>
            <TabButton select = {xyz}>MUSAMMI</TabButton>
            <TabButton select = {xyz}>KAA</TabButton>
          </menu>

          </section>
         */}
         
      {/* {dynamicContent} */}

      {/* {!selectedTopic?<p>press any button</p>: null}


    {selectedTopic ?
      <div id='tab-content' >
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div> : null } */}
    </div>
  

  );
}
export default App;
