import React from 'react';
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



class App extends React.Component {
  constructor(props){
    super(props);
    this.state={show:false}
  }
createApolloClient = authToken => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://gambilife.com/graphql",
      options: {
        reconnect: true,
      }
    }),
    cache: new InMemoryCache()
  });
};
 handlePopup = (e) =>{
      if(e === 'open'){
        this.setState(true)
      }else if(e === 'close'){
        this.setState(false)
      }
  }
  render(){
    const client = this.createApolloClient();
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
             <Shell  handlePopup= {this.handlePopup}/>
            </div>
          </div>
      </div>   
      </div>   
      {this.state.show && <Popup handlePopup= {this.handlePopup}/>}
    

    </div>
    </ApolloProvider>
  );}
}

export default App;
