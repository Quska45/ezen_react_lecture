import React from 'react';

// 'react-redux' 패키지에서 제공하는 hook 함수
import { useSelector, useDispatch } from 'react-redux';
// 화면형태를 구현하고 있는 컴포넌트
import NewsList from '../components/NewsList';
// 모듈기능 참조
import * as newsModule from '../modules/News';

const NewsContainer = (props) => {
    /** Hook 기능을 통해 상태값 가져오기 */
    // -> useSelector()함수에 전달하는 콜백함수가 호출되면서 state 파라미터로 module의 상태값들이 전달된다.
    //    이 상태값들 중 사용하고자 하는 값들만 별도의 JSON으로 묶어 리턴받아 사용한다.
    const { result, loading, error } = useSelector(state => {
        return {
            ...state.newsModule
        };
    });

    /** action함수를 dispatch 시키기 위한 기능 가져오기 */
    const dispatch = useDispatch();

    /** props.query 값이 변경될 때만 실행되는 hook 정의 */
    // 여기서 모듈에 정의해 놓은 thunk 함수를 dispatch하면 redux의 액션 함수가 실행되면서 상태값을 갱신하게 된다.
    React.useEffect(() => {
        dispatch(newsModule.newsListAsync(props.category));
    }, [props.category]);

    return <NewsList result={result} loading={loading} error={error} />;
};

/* Hook방식으로 Redux를 사용할 경우 컴포넌트 최적화를 위해 memo 기능을 활용. */
export default React.memo(NewsContainer);