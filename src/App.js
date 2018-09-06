import React from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Divider from './components/Divider/Divider';
import Scanner from './components/Scanner/Scanner';
import StartButton from './components/StartButton/StartButton';
import ResultDialog from './components/ResultDialog/ResultDialog';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showReader: false, delay: 300, result: null };

    this.onScan = this.onScan.bind(this);
    this.onScanError = this.onScanError.bind(this);
    this.runScanner = this.runScanner.bind(this);
    this.onDialogClose = this.onDialogClose.bind(this);
  }

  runScanner() {
    this.setState({ showReader: true });
  }

  onScan(data) {
    console.log(data);
    if (data) {
      this.setState({
        result: data,
        showReader: false,
      });
    }
  }

  onScanError(err) {
    console.log(err);
  }

  onDialogClose() {
    this.setState({
      showReader: false,
      result: null,
    });
  }

  render() {
    const { showReader, delay, result } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="app__wrapper mdc-card">
          <Search />
          <Divider />
          {showReader ? (
            <Scanner
              onScan={this.onScan}
              onError={this.onScanError}
              delay={delay}
            />
          ) : (
            <StartButton onClick={this.runScanner} />
          )}
        </div>
        <ResultDialog result={result} onDialogClose={this.onDialogClose} />
      </div>
    );
  }
}
