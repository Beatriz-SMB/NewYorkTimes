import React from 'react'
import menu from '../../assets/img/menu_white_24dp.svg';
import { Container } from './style';

const Header = () => {
    return(
        <Container>
            <img src={menu} alt="" />
            <h1>New York Times</h1>
            <input type="text" placeholder="Search"/>
        </Container>
    );
}

export default Header