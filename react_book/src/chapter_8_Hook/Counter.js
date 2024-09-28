import React, {useState} from "react";

const Counter = () => {
    const [value, setValue] = useState(0); //이렇게 state로 만들어서 사용가능 가장 많이 쓰는 훅중에 하나이다.

    return(
        <div>
            <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
            <button onClick={()=> setValue(value+1)}>+1</button>
            <button onClick={()=> setValue(value-1)}>-1</button>
        </div>
    )

}

export default Counter