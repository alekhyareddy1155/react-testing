import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import { getSecretWord } from './actions';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}

export default connect(mapStateToProps,{ getSecretWord })(App);