import axios from 'axios';
import Router from 'next/router';

/** 화면을 렌더링 하는 함수 */
const Write = () => {

    /** <input> 태그에 대한 참조변수 */
    const refDname = React.useRef();
    const refLoc = React.useRef();

    /** form에 대한 전송 이벤트 정의 --> ajax 처리를 수행할 것이므로 async 명시 */
    const onFormSubmit = async (e) => {
        // submit 전송이 되지 않도록 차단
        e.preventDefault();

        // 참조변수를 통해 <input>태그에 대한 입력값을 가져온다.
        const dname = refDname.current.value;
        const loc = refLoc.current.value;

        console.group("onFormSubmit");
        console.debug(dname);
        console.debug(loc);
        console.groupEnd();

        try {
            const formdata = new FormData();
            formdata.append('dname', dname);
            formdata.append('loc', loc);
            
            const response = await axios({
                method: 'post',
                url: 'http://itpaper.co.kr/demo/react/api/dept_write.php',
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
    };

    return (
        <div className="container">
            <form className="form-horizontal" onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="dname">학과명</label>
                    <div className="col-sm-10">
                        <input type="text" id="dname" name="dname" ref={refDname} className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="loc">위치</label>
                    <div className="col-sm-10">
                        <input type="text" id="loc" name="loc" ref={refLoc} className="form-control" />
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

export default Write;