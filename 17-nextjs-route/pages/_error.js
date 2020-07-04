const MyError = ({ statusCode }) => {
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>{statusCode}에러가 발생했습니다.</h2>
        </div>
    );

};

MyError.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : (err ? err.statusCode : 404);
    return { statusCode }
}

export default MyError;