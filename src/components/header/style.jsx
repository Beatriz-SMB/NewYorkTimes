import styled from 'styled-components'
import whiteSearch from '../../assets/img/search_white_24dp.svg';
import blackSearch from '../../assets/img/search_black_24dp.svg';

export const Container = styled.div`
    align-items: center;
    background: #000;
    display: flex;
    height: 84px;
    justify-content: space-around;
    width: 100%;

    h1{
        color: #FFF;
        font-size: 40px;
    }

    input{
        background: #000;
        background-image: url(${whiteSearch});
        background-position: left center;
        background-repeat: no-repeat;
        border: none;
        border-bottom: 1px solid white;
        padding: 8px 30px;
        width: 10%;
        
        &:hover{
            background: #FFF;
            border-radius: 5px;
            background-image: url(${blackSearch});
            background-position: left center;
            background-repeat: no-repeat;
        }
    }
`