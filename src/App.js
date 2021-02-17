import { Layout } from './components/Layout';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Header } from 'semantic-ui-react';
import { MainComponent } from './components/MainComponent';


function App() {
  return (
    <Layout className="App">
      <div style={{ maxHeight: "80vh"}}>
        <div className='card_floated'>
          <MainComponent/>
        </div>
        <Header as="h1" inverted className="text_floated">Advances for syndication</Header>
        <div style={{backgroundColor : "#00b5ad",margin: "0 0", width : "100%", height : "20vh"}}>
          
        </div>
        <div style={{margin: "0 0", width : "100%", height : "70vh"}} />

        
      </div>
    </Layout>
  );
}

export default App;
