import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

/** 화면을 렌더링 하는 함수 */
const Edit = (props) => {

    const {data} = props;

    /** <input> 태그에 대한 참조변수 */
    const refDeptno = React.useRef();
    const refDname = React.useRef();
    const refLoc = React.useRef();

    /** form에 대한 전송 이벤트 정의 --> ajax 처리를 수행할 것이므로 async 명시 */
    const onFormSubmit = async (e) => {
        // submit 전송이 되지 않도록 차단
        e.preventDefault();

        // 참조변수를 통해 <input>태그에 대한 입력값을 가져온다.
        const deptno = refDeptno.current.value;
        const dname = refDname.current.value;
        const loc = refLoc.current.value;

        console.group("onFormSubmit");
        console.debug(deptno);
        console.debug(dname);
        console.debug(loc);
        console.groupEnd();

        try {
            const formdata = new FormData();
            formdata.append('deptno', deptno);
            formdata.append('dname', dname);
            formdata.append('loc', loc);
            
            const response = await axios({
                method: 'post',
                url: 'http://itpaper.co.kr/demo/react/api/dept_edit.php',
                data: formdata
            });
            
            if (response.data.rt !== 'OK') {
                alert(response.data.rt);
                return false;
            }

            // 백엔드에서 반환하는 신규로 저장된 데이터의 고유식별번호(=학과번호)
            Router.push("/department/view/" + response.data.item.deptno);
        } catch (e) {
            console.log(e);
            alert("저장에 실패했습니다.");
        }
    }

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

    // 수정 form
    return (
        <div className="container">
            <form className="form-horizontal" onSubmit={onFormSubmit}>
                <input type="hidden" name="deptno" ref={refDeptno} defaultValue={data.item.deptno} />
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="dname">학과명</label>
                    <div className="col-sm-10">
                        <input type="text" id="dname" name="dname" ref={refDname} className="form-control" defaultValue={data.item.dname} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="loc">위치</label>
                    <div className="col-sm-10">
                        <input type="text" id="loc" name="loc" ref={refLoc} className="form-control" defaultValue={data.item.loc} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-primary">저장</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

/** 페이지가 로드 되기 전에 실행된다. */
Edit.getInitialProps = async  (props) => {

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

export default Edit;