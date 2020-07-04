import React from 'react';

const MyEffect = () => {
    const [mySize, setMySize] = React.useState(320);

    /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨  */
    React.useEffect( () => {
        console.log("[MyEffect1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능", new Date());
    }, []);

    /** 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 매번 실행됨 */
    React.useEffect( () => {
        console.log("[MyEffect2] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨", new Date());
    });

    /** state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨 */
    React.useEffect( () => {
        return () => {
            console.log('[MyEffect3] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능', new Date());
        };
    });

    /** 이 컴포넌트가 화면에 막 등장할 때와 특정 state값이 변경될 때만 실행됨 */
    React.useEffect( () => {
        console.log("[MyEffect4] %s ::: mySize값이 변경됨", new Date());
    }, [mySize]);

    return (
        <div>
            <h2>MyEffect</h2>

            <div>
                <input
                    type='range'
                    min='40'
                    max='640'
                    value={mySize}
                    step='40'
                    onChange={e => {
                        setMySize(e.currentTarget.value);
                    }}
                />
            </div>

            <img alt='Hello React' width={mySize} src='http://placehold.it/640?text=HelloReact' />
        </div>
    );
};

export default MyEffect;
