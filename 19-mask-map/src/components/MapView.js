import React from 'react';

import styled from 'styled-components';

/**
 * 카카오 지도 컴포넌트
 */
import { Map, Marker, Overlay } from 'kakao-map-react';

const MapBox = styled.div`
    padding-top: 36px;
    height: calc(100% - 36px);
`;

const MapView = (props) => {

    // container에서 전달된 정보를 추출
    const {lat, lng, list} = props;

    return (
        <MapBox>
            <Map
                kakaoApiKey='자신의 API Key'
                initialPosition={{
                    longitude: lng,
                    latitude: lat,
                    level: 10
                }}
                // 지도에 표시되는 위치가 변경된 경우 호출될 콜백
                // map 파라미터는 kakao api에서 전달하는 객체 원본
                onDragEnd={map => {
                    const center = map.getCenter();
                    console.log(center);
                }}
                center={{
                    longitude: lng,
                    latitude: lat
                }}>
                {/* 검색결과 데이터 수 만큼 목록의 아이템을 표시함 */}
                {list.map((item, index) => {
                    // 100개 이상(녹색): 'plenty' / 30개 이상 100개미만(노랑색): 'some' / 2개 이상 30개 미만(빨강색): 'few' / 1개 이하(회색): 'empty' / 판매중지: 'break'
                    let color = null,
                        state = null;

                    switch (item.remain_stat) {
                        case 'plenty':
                            color = 'green';
                            state = '100개 이상';
                            break;
                        case 'some':
                            color = 'orange';
                            state = '30개 이상 100개미만';
                            break;
                        case 'few':
                            color = 'red';
                            state = '2개 이상 30개 미만';
                            break;
                        case 'empty':
                            color = 'gray';
                            state = '1개 이하';
                            break;
                        default:
                            color = 'black';
                            state = '판매중단';
                    }

                    return (
                        <Marker
                            key={index}
                            longitude={item.lng}
                            latitude={item.lat}
                            onClick={() => {
                                alert(item.name + ', ' + state);
                            }}
                        />
                    );
                })}
            </Map>
        </MapBox>
    );
};

export default MapView;
