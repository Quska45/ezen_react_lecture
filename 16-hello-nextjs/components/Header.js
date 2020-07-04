// 링크를 적용하기 위해 import 필요함 (nextjs 전용)
import Link from 'next/link';

// CSS 적용방법(1) - CSS코드의 내용을 담는 객체 정의
const ulStyle   = { listStyle: 'none', padding: '0px', margin: '0px' };
const liStyle   = { display: 'inline-block' };
const linkStyle = { marginRight: '15px' };

const Header = () => {
    // style 속성을 CSS객체 적용
    return (
        <ul style={ulStyle}>
            <li style={liStyle}><Link href="/"><a style={linkStyle}>홈</a></Link></li>
            <li style={liStyle}><Link href="/about"><a style={linkStyle}>소개</a></Link></li>
            <li style={liStyle}><Link href="/get_param"><a style={linkStyle}>GET파라미터</a></Link></li>
        </ul>
    );
};

export default Header;