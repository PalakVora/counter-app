import React, { Component } from 'react';

export default class Counter extends Component {
    //for dynamic value instead of hardcoding
    state = { 
        count : this.props.value,
        tags: ['tag1','tag2'],
        message: "Please create a new tag!"
     };
     
//Adding constructor always is a hassle hence another way to inherit 'this' is set the function to arrow function

    render() { 

        //While returning two tags the React.createElement in bable doest know which tag to pass as it passes only 1 element as a parameter; hence wrap two tags in div; one of the solution


        return (
            <div>
               
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={() => this.handleIncrement({id:1})} 
                className={this.getBadgeClasses()}
                >
                    Increment
                </button>
            </div>
        );  
        
    }
    //Ctrl+Shitf+R : For auto extraction of code lines to another function
    
    handleIncrement =product =>{
        console.log(product);
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
        const x='Zero';
        return count===0?x:count;
    }
}





/*Extra code tried out
export default Counter;  

//console.log("props",this.props);

Insert image through 'state' element imageURL
imageURL:"https://picsum.photos/200"
<img src={this.imageURL} alt=""/>

For getting the 'this' to the function in earlier versions    
constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this); //bind returns new instance of handleIncrement function which still has access to curent counter object
}

For setting style of a tag
   styles={
         fontSize: 10,
         fontWeight: 'bold'
     };
 
true&&'hi'&&1 ; in js if the operands are true it gives the last operand
false&&'hi' ; will return false and wont go any further     

{this.state.tags.length===0&&this.state.message}
{this.renderTags()} 

   renderTags(){
        if (this.state.tags.length===0) return <p> "There are no tags"</p>;
        return (<ul>
           {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
       </ul>);
    }

For entry in the Console of inspect element on the browser
console.log('Increment Clicked',this.state.count);

For passing parameter to function
Temporary make another function which calls the function and passes argument
onClick={this.doHandlwIncrement} 
handleIncrement =(product) =>{
        console.log(product);
        this.setState({count: this.state.count+1})
    };

    doHandlwIncrement=()=>{
        this.handleIncrement({id:1}); //Product obj with id 1
    };
        
*/