import React, { Component } from 'react';

class MyStateSub2 extends Component {
    // 생성자가 없는 경우 state값 직접 정의
    state = {
        my_number: 0,
        my_time: new Date().toString()
    };

    /** 이벤트 핸들러 함수 -> 생성자가 없는 경우 반드시 화살표 함수 형태로 정의 */
    onButtonClick = (e) => {
        let {my_number, my_time} = this.state;

        // 준비한 state값에 대한 변경 처리
        my_number++;
        my_time = new Date().toString();

        // 변경 결과를 화면에 반영하고 싶은 항목들만 별도의 json으로 묶는다.
        const my_data = {
            my_number: my_number,
            my_time: my_time
        };
        // JSON외에 배열도 사용 가능함.
        // -> ex) const my_date = [this.state.my_time, this.state.my_number];

        // 준비한 json을 전달한다. --> json 안에 있는 값이 화면에 반영된다.
        this.setState(my_data);
    };

    render() {
        return (
            <div>
                <h3>MyStateSub2</h3>

                <p>
                    {this.state.my_number}회 눌러짐 :
                    <i>
                        <small>{this.state.my_time}</small>
                    </i>
                </p>
                <button onClick={this.onButtonClick}>+1</button>
            </div>
        );
    }
}

export default MyStateSub2;