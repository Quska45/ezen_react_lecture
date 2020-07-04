import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';

/** 1) 액션 */
const SEARCH = 'maskMap/SEARCH';
const SEARCH_SUCCESS = 'maskMap/SEARCH_SUCCESS';
const SEARCH_FAILURE = 'maskMap/SEARCH_FAILURE';

/** 2) 액션 생성 함수 - 액션 객체를 만들어서 리턴한다. */
export const searchAction = createAction(SEARCH);
export const searchSuccessAction = createAction(SEARCH_SUCCESS);
export const searchFailureAction = createAction(SEARCH_FAILURE);

/** 3) 상태값 - 컴포넌트에서 다루고자 하는 데이터들 */
const initialState = {
    result: [], // 검색 결과
    loading: false, // 현재 검색중인지 여부
    error: false // 에러 발생 여부
};

/** 4) 리듀서를 활용하여 스토어에 연결할 Action */
export default handleActions(
    {
        [SEARCH]: (state = initialState, action) => {
            return { ...state, loading: true };
        },
        [SEARCH_SUCCESS]: (state = initialState, action) => {
            return { ...state, result: action.payload.result, loading: false };
        },
        [SEARCH_FAILURE]: (state = initialState, action) => {
            return { ...state, loading: false, error: action.payload.error };
        }
    },
    initialState
);

/** 5) 비동기 작업을 수행할 함수 정의 */
export const maskSearchAsync = (lat, lng) => async dispatch => {
    // 검색을 시작했음을 알림
    dispatch(searchAction());

    // 검색어가 없을 경우 --> 검색결과를 0건으로 지정하여 Success를 호출한다.
    if (!lat || !lng) {
        searchSuccessAction({ result: [] });
        return;
    }

    try {
        const result = await axios.get('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json', {
            params: { lat: lat, lng: lng, m: 5000 }
        });
        console.debug(result.data);
        dispatch(searchSuccessAction({ result: result.data.stores }));
    } catch (e) {
        console.error(e);
        dispatch(searchFailureAction({ error: '검색에 실패했습니다.' }));
    }
};
