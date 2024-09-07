// 리엑트 컴포넌트 만들기
function MyButton(props){
    const [isClicked, setIsClicked] = React.userState(false);

    return React.createElement(
        'button',
        {onclick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : "Click here!"
    )
}
//랜더링 하는 코드
const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);