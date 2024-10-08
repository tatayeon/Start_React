import React, {useState, useEffect} from "react";
import useInputs from "./useInputs";

const Info = () =>{
    const [state, onChange] = useInputs({
        name:'',
        nickname:''
    });
    const {name, nickname} = state;

    return(
        <div>
            <div>
                <input name='name' onChange={onChange}></input>
                <input name='nickname' onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    )

}

export default Info;