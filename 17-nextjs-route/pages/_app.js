import App from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';

/**
 * 모든 페이지들에게 적용되는 공통 컴포넌트.
 * -> 페이지들의 내용이 이 안에 포함되는 개념
 */
class MyApp extends App {
    static async getInitialProps(appContext) {
        const appProps = await App.getInitialProps(appContext);
        return { ...appProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        );
    }
}

export default MyApp;
