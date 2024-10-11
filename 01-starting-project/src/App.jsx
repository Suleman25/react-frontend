import CoreConcept from './CoreConcept';
import image from './assets/components.png';
import image1 from'./assets/config.png';
import image2 from'./assets/jsx-ui.png';
import image3 from'./assets/react-core-concepts.png';
import TabButton from './component/tabButton/TabButton';
import { CORE_CONCEPTS } from './data';


function App() {
  return (
    <div>
      
      <main>
        <section id="core-concepts">
          <h2>core concept</h2>
          <ul>
          {/* <CoreConcept  image={image}  title="fundamental" desc="xyz"/>
          <CoreConcept  image={image1}  title="frontend" desc="xyz" />
          <CoreConcept  image={image2}  title="javascript" desc="xyz"/>
          <CoreConcept  image={image3}  title="react concept" desc="xyz"/>  */}
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>

        <section id="examples" >
          <h2>Examples</h2>
          
          <menu>
            <TabButton >frontend</TabButton>
            <TabButton >backend</TabButton>
            <TabButton >react</TabButton>
            <TabButton >javascript</TabButton>


          </menu>

          </section>
        
      </main>
      
    </div>
  );
}

export default App;
