import React from 'react';

/**
 * props : 컴포넌트를 사용하는 부모에 의해 전달받는 변수
 *         컴포넌트 내부에서 변경할 수 없다.
 * state : 컴포넌트 내부에서 자체적으로 사용하는 변수.
 */
class MyStateSub1 extends React.Component {
    /**
     * 생성자 정의
     *  - 생성자는 props값을 파라미터로 반드시 지정해야 한다.
     */
    constructor(props) {
        // 클래스형 컴포넌트에서 생성자를 작성할 때는 반드시 호출
        super(props);

        /** state값 정의 -> 사용하고자 하는 변수들을 JSON 형식으로 정의 */
        this.state = {
            my_number: 0,
            my_time: new Date().toString()
        };

        // 컴포넌트 클래스에 이벤트 처리 함수 등록
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    /** 이벤트 핸들러 함수 */
    onButtonClick(e) {
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
    }

    render() {
        return (
            <div>
                <h3>MyStateSub1</h3>

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

export default MyStateSub1;