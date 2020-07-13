import React, { Component } from 'react';

export default class Counter extends Component {
    //for dynamic value instead of hardcoding
    state = { 
        count : 0,
        tags: [],
        message: "Please create a new tag!"
        //imageURL:"https://picsum.photos/200"
     };
     
     //Adding constructor always is a hassle hence another way to inherit 'this' is set the function to arroq function
     //constructor(){
       // super();
        //this.handleIncrement = this.handleIncrement.bind(this); //bind returns new instance of handleIncrement function which still has access to curent counter object
    // }
    // styles={
      //   fontSize: 10,
        // fontWeight: 'bold'
     //};
     renderTags(){
         if (this.state.tags.length===0) return <p> "There are no tags"</p>;
         return (<ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>);
     }
    render() { 

        //While returning two tags the React.createElement in bable doest know which tag to pass as it passes only 1 element as a parameter; hence wrap two tags in div; one of the solution
        //true&&'hi'&&1 ; in js if the operands are true it gives the last operand
        //false&&'hi' ; will return false and wont go any further
        return (
            <div>
                {this.state.tags.length===0&&this.state.message}
                {this.renderTags()} 
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.handleIncrement} 
                className={this.getBadgeClasses()}
                >
                    Increment
                </button>
            </div>
        );  
        
    }
    //Ctrl+Shitf+R : For auto extraction of code lines to another function
   
    handleIncrement =() =>{
        //console.log('Increment Clicked',this.state.count);
        this.setState({count: this.state.count+1})
    };
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