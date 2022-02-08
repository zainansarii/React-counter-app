import React, { Component } from 'react';

class Counter extends Component {

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
                <button onClick={() => this.props.onIncrement(this.props.counter)} 
                        className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.renderTags()} */}
            </div>
        );    
    }

    // renderTags() {
    //     if(this.state.tags.length==0){
    //         return(<p>There are no tags</p>)
    //     }
    //     else{
    //         return(<ul>
    //             {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //         </ul>)
    //     }
    // }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        if (this.props.counter.value == 0) {
            classes += "warning";
        }
        else {
            classes += "primary";
        }
        return classes;
    }

    formatCount(){
        if(this.props.counter.value===0){
            return('Zero')
        }
        else{
            return(this.props.counter.value)
        }
    }

}
export default Counter;