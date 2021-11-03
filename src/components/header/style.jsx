import styled from 'styled-components'
import whiteSearch from '../../assets/img/search_white_24dp.svg';
import blackSearch from '../../assets/img/search_black_24dp.svg';

export const Container = styled.div`
    align-items: center;
    background: #000;
    display: flex;
    height: 100px;
    justify-content: space-around;
    width: 100%;
    
    *{
        background: inherit;
    }

    h1{
        color: #FFF;
        font-size: 50px;
    }

    input{
        background-image: url(${whiteSearch});
        background-position: left center;
        background-repeat: no-repeat;
        border: none;
        border-bottom: 1px solid white;
        padding: 8px 30px;
        width: 14%;
        
        &:hover{
            background: #FFF;
            border-radius: 5px;
            background-image: url(${blackSearch});
            background-position: left center;
            background-repeat: no-repeat;
        }
    }
`