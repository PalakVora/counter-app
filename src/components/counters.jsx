import React, { Component } from 'react';
import Counter from './counter';

class Counters  extends Component {
    render() { 
        return (
            <div>
                <button
                    className={"btn btn-primary btn-small m-2"}
                    onClick={this.props.onReset}
                >Reset</button>
                {this.props.counters.map(counter=>
                <Counter 
                    key={counter.id} 
                    onIncrement={this.props.onIncrement} 
                    onDelete={this.props.onDelete}      //raises an onDelete event and bubbling to parent; parent will handle the event
                    counter={counter}
                >
                    
                </Counter>
                )}
            </div>
          );
    }
}
 
export default Counters ;
