import React from 'react';
import styled from 'styled-components';

const ImageItemLink = styled.a`
    display: block;
    width: 150px;
    height: 210px;
    text-decoration: none;
    background-color: #fff;
    color: #222;
    padding: 10px;
    border: solid 1px #d5d5d5;
    border-radius: 3px;
    cursor: pointer;
    float: left;
    margin: 0 10px 10px 0;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.1, 1.1) rotate(5deg);
    }

    .img {
        width: 150px;
        height: 150px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #fff;
        margin-bottom: 10px;
    }

    .img_size {
        font-size: 16px;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
    }

    .sitename {
        font-size: 14px;
        padding: 0;
        margin: 0;
    }
`;

const ImageItem = ({item}) => {
    return (
        <ImageItemLink href={item.doc_url} target="_blank">
            <div className="img"
                 style={{backgroundImage: 'url(' + item.image_url + ')'}} />
            <p className="img_size">{item.width}x{item.height}</p>
            <p className="sitename">{item.display_sitename}</p>
        </ImageItemLink>
    );
};

export default ImageItem;
