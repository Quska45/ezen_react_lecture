import Link from 'next/link';
import axios from 'axios';

/** 화면을 렌더링 하는 함수 */
const List = (props) => {

    const {data} = props;

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
            <h1>학과관리</h1>
            <div className="text-right">
                <Link href="/department/write"><a className="btn btn-primary">학과추가</a></Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">학과번호</th>
                        <th className="text-center">학과명</th>
                        <th className="text-center">위치</th>
                    </tr>
                </thead>
                <tbody>
                    {data.item.map((item, index) => {
                        return (
                            <tr key={index} className="text-center">
                                <td>{item.deptno}</td>
                                <td><Link href={"/department/view/" + item.deptno}><a>{item.dname}</a></Link></td>
                                <td>{item.loc}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

/**
 * 페이지가 로드 되기 전에 실행된다.
 * 1) Get 파라미터 초기화
 * 2) 화면이 열림과 동시에 Ajax로 가져와야할 데이터를 로드 
 */
List.getInitialProps = async (props) => {
    // 결과를 저장할 빈 변수
    let resultData = null;

    try {
        const response = await axios.get('http://itpaper.co.kr/demo/react/api/dept_list.php');
        console.log(response.data);
        resultData = response.data;
    } catch (e) {
        resultData = {rt: '예외가 발생했습니다.'};
    }

    return { data: resultData };
};

export default List;