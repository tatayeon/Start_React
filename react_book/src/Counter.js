import React, { Component } from 'react';

class Counter extends Component{
    state = {
        number: 0,
        fixNumber: 0
    };

    render() {
        const { number, fixNumber } = this.state; //state를 조회할 때는 this.state를 사용한다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>변하지 않는 값 : {fixNumber}</h2>
                <button onClick={()=>{
                        this.setState({number: number + 1});
                    }}>
                +1
                </button>
            </div>
        );
    }
}

export default Counter;