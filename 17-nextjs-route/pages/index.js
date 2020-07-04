import styled, { css } from 'styled-components';

const Myh1 = styled.h1`
    color: #000099;
`;

const index = () => {
    return (
        <div className="container">
            <Myh1>
                Hello Next.js
                &nbsp;
                <small>with Bootstrap3</small>
            </Myh1>
        </div>
    );
};

export default index;
