import React from 'react';

const MyState = () => {
    /**
     * state값 정의
     * - const [변수선언, 변수에대한setter함수] = React.useState(변수의기본값);
     * - state값은 직접 변경할 수 없고 반드시 setter를 통해서만 변경 가능하다.
     */
    const [myName, setMyName] = React.useState('');
    const [myPoint, setMyPoint] = React.useState(50);

    /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
    const handleMyPointChange = e => {
        setMyPoint(e.currentTarget.value);
    };

    return (
        <div>
            <h2>MyState</h2>

            {/* state값을 출력할 때는 단순히 변수값으로서 사용한다. */}
            <h3>
                {myName}님의 점수는 {myPoint}점 입니다.
            </h3>

            <hr />

            <div>
                <label htmlFor='myNameInput'>이름: </label>
                <input
                    id='myNameInput'
                    type='text'
                    value={myName}
                    // 이벤트 핸들러를 익명 화살표 함수 형식으로 정의한 경우
                    onChange={e => {
                        // 자기 스스로의 입력값을 myName이라는 state값에 반영함
                        setMyName(e.currentTarget.value);
                    }}
                />
            </div>

            <div>
                <label htmlFor='myPointInput'>점수: </label>
                <input
                    id='myPointInput'
                    type='range'
                    min='0'
                    max='100'
                    value={myPoint}
                    step='1'
                    onChange={handleMyPointChange}
                />
            </div>
        </div>
    );
};

export default MyState;
