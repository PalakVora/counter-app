import React, { Component } from 'react';
import Counter from './counter';

class Counters  extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement}=this.props
        return (
            <div>
                <button
                    className={"btn btn-primary btn-small m-2"}
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(counter=>
                    <Counter 
                        key={counter.id} 
                        onIncrement={onIncrement} 
                        onDelete={onDelete}      //raises an onDelete event and bubbling to parent; parent will handle the event
                        counter={counter}
                    />
                )}
            </div>
        );
    }
}
 
export default Counters ;
