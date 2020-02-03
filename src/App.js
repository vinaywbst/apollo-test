import React,{useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Table from './components/table/table';
import Shell from './components/shell/shell';
import Popup from './components/popup/popup';
import SliderInput from './components/slider-input';
import Slider from './components/slider';
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";


const createApolloClient = authToken => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "ws://gambilife.com/graphql",
      options: {
        reconnect: true,
      }
    }),
    cache: new InMemoryCache()
  });
};


function App () {
const [show, setShow] = useState(false)
  const handlePopup = (e) =>{
      if(e === 'open'){
        setShow(true)
      }else if(e === 'close'){
        setShow(false)
      }
  }
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <div className="main-wrapper">
      <Header />
      <div className="main-content">
          <div className="container">
            <div className="box-left">
              <Slider/>
              <SliderInput/>
            </div>
            <div className="box-center">
                <Table />
            </div>
            <div className="box-right">
             <Shell  handlePopup= {handlePopup}/>
            </div>
          </div>
      </div>   
      </div>   
      {show && <Popup handlePopup= {handlePopup}/>}
    

    </div>
    </ApolloProvider>
  );
}

export default App;
