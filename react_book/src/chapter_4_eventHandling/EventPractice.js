import React, {Component} from "react";

class EventPractice extends Component {
    render() {
        return(
            <dev>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력해보세요" onChange={(e) => {console.log(e.target.value);}}>
                </input>
            </dev>
        )
    }
}

export default EventPractice;