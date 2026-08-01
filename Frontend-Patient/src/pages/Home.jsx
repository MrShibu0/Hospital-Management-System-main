import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Gallery from '../components/Gallery';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';

const Home = () => {
    return (
        <>
            <Hero
                title={"Life Care Hospital, Where Compassion Meets Excellence in Healthcare "}
                imageUrl={"/hero.png"}
            />
            <Biography imageUrl={"/about.png"} />
            <Gallery />
            <Departments />
            <MessageForm />

        </>
    );
}

export default Home;
