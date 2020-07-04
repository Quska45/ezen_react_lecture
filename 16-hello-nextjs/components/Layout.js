import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
    return (
        <div>
            <Head>
                <title>Hello Next.js</title>
            </Head>
            <Header />
            <hr />
            {props.children}
            <hr />
            <Footer />
        </div>
    );
};

export default Layout;
