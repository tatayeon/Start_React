import PropTypes from 'prop-types';

const MyComponents = ({name,number,children}) => {
   return (<div>안녕하세요, 제이름은 {name}입니다. <br/>
    Children 값은 {children}
    입니다. <br/>
    제가 좋아하는 숫자는 {number}입니다.
   </div>
   );
};

MyComponents.defaultProps = {
    name : "기본 이름"
};

MyComponents.prototype = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired //이렇게 isRequired사용하면 알려준다.
};

// 다른 파일에서 이 파일을 import할 때 위에서 선언한 마이컴포넌트 클래스를 불러오도록 설정하는 것이다.
export default MyComponents;

