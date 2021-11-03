import React from 'react'
import { Container } from './style';

const Home = () => {
    const lista = ['Maçã', 'Banana', 'Manga', 'Laranja', 'Maçã']
    return(
        <Container>
            {lista.map((ele) => <article>{ele}</article>)}
        </Container>
    )
}

export default Home;