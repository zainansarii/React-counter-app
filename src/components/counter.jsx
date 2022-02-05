import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value:this.props.value,
        tags:['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };

    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() { 
        return (
            <div>
                {/* {this.props.children} */}
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={() => {this.handleIncrement({id:1})}} 
                        className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button onClick={this.handleDelete()}
                        className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.renderTags()} */}
            </div>
        );    
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({value: this.state.value+1}) 
    }

    renderTags() {
        if(this.state.tags.length==0){
            return(<p>There are no tags</p>)
        }
        else{
            return(<ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>)
        }
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        if (this.state.value == 0) {
            classes += "warning";
        }
        else {
            classes += "primary";
        }
        return classes;
    }

    formatCount(){
        if(this.state.value===0){
            return('Zero')
        }
        else{
            return(this.state.value)
        }
    }

}
export default Counter;