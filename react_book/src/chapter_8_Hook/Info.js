import React, {useState, useEffect} from "react";

const Info = () =>{
    const[name, setName] = useState('');
    const[nickname, setNickname] = useState('');

    useEffect(() => {
        console.log("effect");
        console.log(name);
        return () =>{
            console.log("cleanup");
            console.log(name);
        }

    }, [name]); //특정값만 변경될 때는 이렇개 변수를 대괄호안에 넣어준다.

    const onChangeName = e =>{
        setName(e.target.value);
    };

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}></input>
                <input value={nickname} onChange={onChangeNickname}></input>
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