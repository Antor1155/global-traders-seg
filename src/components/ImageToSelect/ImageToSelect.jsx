import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid black;
    display: inline-block;
    margin-right: 5px;
    img{
        object-fit:contain;
        max-width: 100px;
    }
`

const ImageToSelect = ({setSelectedImage, selectedImage, ImgUrl}) => {
    const handleSelect = () =>{
        setSelectedImage(ImgUrl)
    }

    const checked = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>

    return (
        <StyledDiv onClick={handleSelect}>
            {selectedImage === ImgUrl ? checked : ""}
           <img src={ImgUrl} alt='product Image'></img> 
        </StyledDiv>
    );
};

export default ImageToSelect;