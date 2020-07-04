import React from 'react';
import ImageForm from '../components/ImageForm';
import ImageList from '../components/ImageList';

const ImageSearch = ({match}) => {
    // 전체 Path 파라미터 받아오기
    const {params} = match;
    
    return (
        <div>
            <h1>Kakao Image Search</h1>

            <ImageForm />
            <hr />

            {/* query라는 이름의 Path 파라미터를 전달함 */}
            <ImageList query={params.query} />
        </div>
    );
};

export default ImageSearch;