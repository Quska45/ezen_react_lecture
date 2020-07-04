import React, { Component } from 'react';

class MyRefSub2 extends Component {
    
    // 상태값.
    state = {
        myMessage: 'Hello World'
    };

    render() {
        // 상태값을 비구조 문법으로 분리해 낸다.
        let { myMessage } = this.state;

        return (
            <div>
                <h3>MyRefSub2</h3>

                {/* ref 속성을 통해 myInputAreaRef라는 참조변수를 연결 */}
                <input
                    type='text'
                    ref={ref => this.myInputAreaRef = ref}
                    placeholder='input any message'
                    onChange={e => {
                        // 상태값 갱신
                        myMessage = e.target.value;
                        this.setState({myMessage});

                        // 콜백함수로 직접 정의한 참조변수는 그 자체가 DOM을 의미한다.
                        this.myCopyAreaRef.value = myMessage;
                    }}
                />

                {/* ref 속성을 통해 myCopyAreaRef라는 참조변수를 연결 */}
                <input 
                    type='text'
                    placeholder='copy area'
                    ref={ref => this.myCopyAreaRef = ref}
                    readOnly />

                {/* 상태값 출력 */}
                <p>{myMessage}</p>

                <button type='button'
                    onClick={e => {
                        myMessage = '';
                        this.setState({myMessage});
                        // 생성된 참조변수를 통해 <input>요소에 접근
                        this.myInputAreaRef.value = '';
                        this.myCopyAreaRef.value = '';
                    }}>Clear</button>
            </div>
        );
    }
}

export default MyRefSub2;