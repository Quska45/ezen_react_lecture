// 파라미터를 받기 위한 패키지 참조
import { useRouter } from 'next/router';

const intro = () => {
    // hook을 통해 라우터 사용 시작
    const router = useRouter();

    console.log(router.query);

    return (
        <div className="container">
            <h1>intro/[...data].js 입니다.</h1>
            <p>
                { JSON.stringify(router.query) }
            </p>
        </div>
    );
};

export default intro;
