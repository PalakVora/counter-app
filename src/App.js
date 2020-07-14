import React, {Component} from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from './components/counters';

export default class App extends Component {
  state = { 
    counters:[
        { id: 1, value:4},
        { id: 2, value:0},
        { id: 3, value:0},
        { id: 4, value:0}
    ]
  };

  handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleDecrement=(counterID)=>{
    const counters=this.state.counters.filter(c=>c.id!==counterID);
    this.setState({counters});
  };
  handleReset=(counterID)=>{
    const counters= this.state.counters.map(c=>{
        c.value=0;
        return c;
    });
    this.setState({counters});
  };
  render(){
    return (
      <React.Fragment>
      <NavBar/>
      <main className='container'>
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </main>
      </React.Fragment>
    );
  }
}
