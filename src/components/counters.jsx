import React, { Component } from 'react';
import Counter from './counter';

class Counters  extends Component {
    state = { 
        counters:[
            { id: 1, value:4},
            { id: 2, value:0},
            { id: 3, value:0},
            { id: 4, value:0}
        ]
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
    }
    render() { 
        return (
            <div>
                <button
                    className={"btn btn-primary btn-small m-2"}
                    onClick={this.handleReset}
                >Reset</button>
                {this.state.counters.map(counter=>
                <Counter key={counter.id} onDelete={this.handleDecrement} onReset={this.handleReset} counter={counter}>
                    
                </Counter>
                )}
            </div>
          );
    }
}
 
export default Counters ;
