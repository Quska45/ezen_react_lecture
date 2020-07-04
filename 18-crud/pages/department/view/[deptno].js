import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

/** 화면을 렌더링 하는 함수 */
const View = (props) => {

    const {data} = props;

    /** 삭제 이벤트 정의 --> ajax 처리를 수행할 것이므로 async 명시 */
    const onDeleteClick = async (e) => {
        e.preventDefault();

        if (!confirm('정말 이 학과를 삭제하시겠습니까?')) {
            return false;
        }

        // e.currentTarget --> 이 이벤트를 발생시킨 주체 (여기서는 삭제버튼)
        const deptno = e.currentTarget.attributes.getNamedItem('data-deptno').value;
        console.log(deptno);

        try {
            const formdata = new FormData();
            formdata.append('deptno', deptno);
            
            const response = await axios({
                method: 'post',
                url: 'http://itpaper.co.kr/demo/react/api/dept_delete.php',
                data: formdata
            });

            console.log(response);
            
            if (response.data.rt !== 'OK') {
                alert(response.data.rt);
                return false;
            }

            Router.push("/department/list");
        } catch (e) {
            console.log(e);
            alert("저장에 실패했습니다.");
        }
    };

    // 결과 메시지가 성공이 아닌 경우
    if (data.rt !== "OK") {
        return (
            <div className="container">
                <div className="alert alert-danger">
                    <h4>Opps!!!!</h4>
                    <p>{data.rt}</p>
                </div>
            </div>
        );
    }

    // 정상적으로 데이터를 조회한 경우
    return (
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h4>{data.item.dname}</h4>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">학과번호: {data.item.deptno}</li>
                    <li className="list-group-item">학과위치: {data.item.loc}</li>
                </ul>
            </div>

            <div className="text-center">
                <Link href={"/department/list"}><a className="btn btn-success">목록</a></Link>&nbsp;
                <Link href={"/department/edit/" + data.item.deptno}><a className="btn btn-warning">수정</a></Link>&nbsp;
                <button type="button" className="btn btn-danger" data-deptno={data.item.deptno} onClick={onDeleteClick}>삭제</button>
            </div>
        </div>
    );
};

/**
 * 페이지가 로드 되기 전에 실행된다.
 */
View.getInitialProps = async  (props) => {

    console.log(props.query);

    // 결과를 저장할 빈 변수
    let resultData = null;

    try {
        const response = await axios({
            method: 'get',
            url: 'http://itpaper.co.kr/demo/react/api/dept_view.php',
            // get방식 요청은 params, post 방식 요청은 data로 전달함.
            params: {
                deptno: props.query.deptno
            }
        });
        console.log(response.data);
        resultData = response.data;
    } catch (e) {
        resultData = {rt: '예외가 발생했습니다.'};
    }

    return { data: resultData };
};

export default View;