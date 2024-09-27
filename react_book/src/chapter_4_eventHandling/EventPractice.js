import React, {Component} from "react";

class EventPractice extends Component {

    state = {
        message: ''
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            message: e.target.value
        });
    }

    handleClick(e){
        this.setState({
            message: ''
        });
    }


    render() {
        return(
            <dev>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력해보세요"
                value={this.state.message}
                onChange={this.handleChange}
                >
                </input>
                <button onClick={this.handleClick}> 확인</button>
            </dev>
        )
    }
}
//임의의 메서드 만들기까지
export default EventPractice;