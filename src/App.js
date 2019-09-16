import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Col,
    Button,
    Container,
    Row,
} from 'react-bootstrap';

class App extends Component {
    constructor(props){
    super(props)
    this.state= {
        buttonText: "Play Game",
        gameWon: false

    }
}

    toggleResult(){
        const newButtonText = this.state.gameWon ? "Play Game" : "Excellent!"
        const newGameWon = this.state.gameWon ? false : true
        this.setState({ buttonText: newButtonText, gameWon: newGameWon})
    }


    render() {
        return (
            <Container>
                <Button onClick={this.toggleResult.bind(this)}>
                    {this.state.buttonText}
                </Button>
                <div id="result-text">{this.state.gameWon && <h4>Congratulations!</h4>}</div>
            </Container>
  );
}}

export default App;
