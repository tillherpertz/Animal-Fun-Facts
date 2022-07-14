import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import dolphinImage from './images/dolphin.jpg';
//import lobsterImage from './images/lobster.jpg';
//import starfishImage from './images/starfish.jpg';

const animals = {
    dolphin: {
      image: '/images/dolphin.jpg',
      facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
      image: '/images/lobster.jpg',
      facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
      image: '/images/starfish.jpg',
      facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
};

const title = 'Animal Funsies';

const displayFact = function(e){
    const animalClicked = e.target.alt;
    const randomIndex = Math.floor(Math.random() * 3);
    const funFact = animals[animalClicked].facts[randomIndex];
    console.log(randomIndex);
    console.log(funFact);
    document.getElementById("fact").innerHTML = funFact;

};

const images = [];

for (const animal in animals) {
    images.push(
    <img 
        key={animal}  
        className='animal'
        alt={animal} 
        aria-label={animal} 
        role="button"
        src={animals[animal].image}
        onClick={displayFact}
    />
    )
};

const showBackground = false;

const background = (
    <img className='background' alt='ocean' src='/images/ocean.jpg'/>
)

const animalFacts = (
    <div>
        {/* <h1>{(title === '') ? 'Click an animal for a fun fact' : title }</h1> */}
        <h1>{title || 'Click an animal for a fun fact'}</h1>
        {showBackground && background}
        <div className='animals'>{images}</div>
        <p id="fact">Here you will see dem facts</p>
    </div>
); 

ReactDOM.render(animalFacts, document.getElementById('root'));