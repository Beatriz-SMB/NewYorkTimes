import React, { useEffect, useState } from 'react'
import { homeRequest } from '../../api/home';
import { Container } from './style';

const Home = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        homeRequest(setNews)
    },[]);

    return(
        <Container>
            {news.map((element, index) => (
                <article key={index} onClick={() => window.location.href = element.url}>
                    <img src={element.multimedia[0].url} alt="news" />
                    <div>
                        <h2>{element.abstract}</h2>
                        <p>{element.byline}</p>
                    </div>
                </article>
            ))}
        </Container>
    )
}

export default Home;