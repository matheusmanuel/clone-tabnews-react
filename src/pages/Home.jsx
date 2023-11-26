import React from 'react';
import Nav from '../components/Nav';
import Posts from '../components/Posts';

const Home = () => {
    return (
        <div>
            <Nav estrategy="relevant"/>
            <Posts />
        </div>
    )
}

export default Home;