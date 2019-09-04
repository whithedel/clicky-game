import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from './cards';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar/';
import GameCards from './components/GameCards/';
import Jumbrotron from './components/Jumbotron';

class App extends Component {
  initialState = {
    cards,
    score: 0,
    topScore: 0,
    guessed : [],
    message : 'Click an image to begin!',
    animation: '',
    textAnimation: ''
  };

  state = this.initialState;

  shuffle =(array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  componentDidMount() {
    const cardsArray = this.shuffle(this.state.cards);
    this.setState({cards : cardsArray})
  }

  handleGuess = id => {
    let newCardsArr = []
    const guessed = this.state.guessed;
    const topScore =this.state.topScore;
    const score = this.state.score;

    this.state.cards.forEach(data => {
      if (data.id === id && !this.state.guessed.includes(data) ){
        this.state.guessed.push(data)
        let highestScore = guessed.length > topScore ? score + 1 : topScore
        this.setState({
          score : this.state.score + 1,
          topScore: highestScore,
          message: 'You guessed correctly!',
          animation: '',
          textAnimation: 'text-success'
        })
        console.log(this.state.guessed)
      } else if (data.id === id && this.state.guessed.includes(data) ){
        this.setState({
          cards,
          score: 0,
          guessed : [],
          message : 'You guessed incorrectly!',
          animation: 'shake',
          textAnimation: 'text-danger'
        })
        console.log(this.state.guessed)
      } 
        newCardsArr.push(data)
        let randomNewCardsArr = this.shuffle(newCardsArr)
        this.setState({ 
          cards : randomNewCardsArr,
          //textAnimation : setTimeout(function(){ return '' }, 1000)
        })

    });
  }

  render() {
    
    return (
      <Wrapper animation={this.state.animation}>
        <Navbar 
          title="Clicky Game"
          guess={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
          textAnimation={this.state.textAnimation}
        />
        <Jumbrotron/>
        {this.state.cards.map(card => (
          <GameCards
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            backgroundImage={card.backgroundImage}
            hasBeenClicked={card.hasBeenClicked}
            handleGuess={this.handleGuess}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
