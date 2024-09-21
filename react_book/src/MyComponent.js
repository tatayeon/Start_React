import PropTypes from 'prop-types';

const MyComponents = ({name, children}) => {
   return (<div>안녕하세요, 제이름은 {name}입니다. <br/>
    Children 값은 {children}
    입니다.
   </div>
   );
};

// 다른 파일에서 이 파일을 import할 때 위에서 선언한 마이컴포넌트 클래스를 불러오도록 설정하는 것이다.
export default MyComponents;

MyComponents.defaultProps = {
    name : "기본 이름"
};

