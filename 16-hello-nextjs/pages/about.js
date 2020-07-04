import Layout from '../components/Layout';

const about = props => {
    return (
        <Layout>
            <div>
                <h1>About.js</h1>
            </div>
            <h2>저로 말씀드릴것 같으면 {props.from}에서 실행되었습니다.</h2>
            <p>a={props.a}</p>
            <p>b={props.b}</p>
        </Layout>
    );
};

// 모든 pages폴더 내의 함수들은 getInitialProps 라는 하위 함수를 갖는다.
// 이 함수를 통해 각 페이지가 웹 프로그램으로 동작할 수 있는 기능을 넘겨받는다.
// ex) 브라우저의 요청을 받기 위한 request 객체 등...
about.getInitialProps = async (props) => {
    console.log(props);

    let from = "client";

    if (props.req) {
        from = "server";
    }

    // 이 함수에서 return하는 객체는 컴포넌트함수에 props 파라미터로 전달된다.
    return { a: 123, b: 234, from: from };
};

export default about;
