import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count:0,
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    render() { 
        return (
            <div>
                <span style={this.styles} className="badge bg-primary m-2">
                    {this.formatCount()}
                </span>
                <button className='btn btn-secondary btn-sm'>
                    Increment
                </button>
            </div>
        );    
    }

    formatCount(){
        if(this.state.count===0){
            return('Zero')
        }
        else{
            return(this.state.count)
        }
    }

}
export default Counter;