import React, { Component } from 'react';
import $ from 'jquery';

class Department extends Component {
    // 학과 목록 데이터
    state = {
        department: []
    };

    /** 컴포넌트가 화면에 표시될 때 실행되는 라이프사이클 메서드 (데이터 불러오기) */
    componentDidMount() {
        $.get('http://itpaper.co.kr/demo/react/api/dept_list.php', json => {
            console.log(json);

            // Ajax로 가져온 데이터를 state에 갱신함
            this.setState({ department: json.item });
        });
    }

    /** 컴포넌트가 화면에서 사라질 때 실행되는 라이프사이클 메서드 (데이터 저장하기) */
    componentWillUnmount() {
        // 이 예제에서는 사용 안함.
    }

    render() {
        const {department} = this.state;
        
        return (
            <div>
                <h2>Department</h2>

                {department.map((item, index) => {
                    return (
                        <div key={item.deptno}>
                            <h3>{item.dname}</h3>
                            <p>
                                학과번호: {item.deptno} / 학과위치: {item.loc}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Department;
