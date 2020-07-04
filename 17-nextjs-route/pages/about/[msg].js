// 파라미터를 받기 위한 패키지 참조
import { useRouter } from 'next/router';

/**
 * Path 파라미터 받기
 *
 *     URL이 "/about/변수명" 인 경우
 *
 * 1) /about 이라는 이름의 폴더를 생성
 * 2) /about/[변수명].js 로 소스파일을 작성
 *
 * 주의!!! --> /about이라는 이름의 폴더와 /about.js 라는 파일이 함께 존재하면 route는 동작하지 않음. (파일이 우선순위)
 */

const about = () => {
    // hook을 통해 라우터 사용 시작
    const router = useRouter();

    console.log(router.query);

    return (
        <div className="container">
            <h1>about.js 입니다.</h1>
            <p>
                { JSON.stringify(router.query) }
            </p>
        </div>
    );
};

export default about;
