import React, { useEffect, useState } from 'react'
import { homeRequest } from '../../api/home';
import { Container } from './style';

const Home = () => {
    const [news, setNews] = useState([null])

    useEffect(() => {
        homeRequest(setNews)
    },[]);

    return(
        <Container>
            {news.map((element, index) => (
                <article key={index}>
                    {/* <img src={} alt="news" /> */}
                    {console.log(element)}
                    {/* <h2>{element.abstract}</h2>
                    <p>{element.byline}</p> */}
                </article>)
            )}
        </Container>
    )
}

export default Home;