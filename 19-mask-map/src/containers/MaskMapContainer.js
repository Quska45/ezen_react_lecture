import React from 'react';

/**
 * 위치정보 취득 컴포넌트
 * > yarn add react-geolocated
 * > https://no23reason.github.io/react-geolocated
 */
import { geolocated } from 'react-geolocated';

// 'react-redux' 패키지에서 제공하는 hook 함수
import { useSelector, useDispatch } from 'react-redux';
// 모듈기능 참조
import * as maskMapModule from '../modules/MaskMap';

/** 컴포넌트 참조 */
import MapView from '../components/MapView';


const MaskMapContainer = props => {
    //console.log(props);

    // 지도에 표시할 기본 위치 지정
    const pos = { lat: 37.502604, lng: 127.024943 };

    // geolocation을 통해 위,경도값 받기
    // if (props.coords) {
    //     pos.lat = props.coords.latitude;
    //     pos.lng = props.coords.longitude;
    // }

    // 위치정보를 상태값으로 등록
    const [position, setPosition] = React.useState(pos);

    /** Hook 기능을 통해 상태값 가져오기 */
    const { result, loading, error } = useSelector(state => {
        return {
            ...state.maskMapModule
        };
    });
    
    /** 최초 실행시 Ajax 연동 */
    React.useEffect( () => {
        dispatch(maskMapModule.maskSearchAsync(position.lat, position.lng));
    }, []);

    /** action함수를 dispatch 시키기 위한 기능 가져오기 */
    const dispatch = useDispatch();

    /** 위치 정보 사용 가능 여부 확인 및 Ajax 상태 확인 */
    if (!props.isGeolocationAvailable) {
        return <h2 style={{ color: '#f00' }}>디바이스가 위치 정보를 지원하지 않습니다.</h2>;
    }
    if (!props.isGeolocationEnabled) {
        return <h2 style={{ color: '#ff0' }}>위치 정보 사용이 허용되지 않았습니다.</h2>;
    }
    if (!props.coords) {
        return <h2 style={{ color: '#ff0' }}>사용 가능한 위치 정보가 없습니다.</h2>;
    }
    if (loading) {
        return <h2 style={{ color: '#00f' }}>검색중입니다...</h2>;
    }
    if (error) {
        return <h2 style={{ color: '#f00' }}>{error}</h2>;
    }

    /** 지도 표시하기 */
    return <MapView lat={position.lat} lng={position.lng} list={result} />;
};

/**
 * 위치정보 취득 옵션 설정
 * HTML5의 Geolocation API에 기반함
 */
export default geolocated({
    positionOptions: {
        enableHighAccuracy: true, // 높은 정확도 사용
        maximumAge: 0, // 캐시유효시간(사용안함)
        timeout: Infinity // 타임아웃(무한대로 설정)
    },
    watchPosition: true // 이동하는 동안 위치 추적 사용
})(MaskMapContainer);
