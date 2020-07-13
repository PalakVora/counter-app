import React, { Component } from 'react';

export default class Counter extends Component {
    //for dynamic value instead of hardcoding
    state = { 
        count : 0,
        //imageURL:"https://picsum.photos/200"
     };
    // styles={
      //   fontSize: 10,
        // fontWeight: 'bold'
     //};
    render() { 

        //While returning two tags the React.createElement in bable doest know which tag to pass as it passes only 1 element as a parameter; hence wrap two tags in div; one of the solution
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button className="btn btn-secondary btn-small">Increment</button>
            </div>
        );  
        
    }
    getBadgeClasses() {
         //if count is 0 display in yellow else display in blue
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        const x=<h1>Zero</h1>;
        return count===0?x:count;
    }
}

 
//export default Counter;