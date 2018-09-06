import React from 'react';

import Ambrosus from 'ambrosus-javascript-sdk';

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

    this.amb = new Ambrosus({
      apiEndpoint: 'https://gateway-test.ambrosus.com',
    });

    this.state = {
      delay: 300,
      assetID: null,
      assetValid: null,
      showReader: false,
      showDialog: false,
    };

    this.onScan = this.onScan.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.runScanner = this.runScanner.bind(this);
    this.getAsset = this.getAsset.bind(this);
    this.dismissDialog = this.dismissDialog.bind(this);
  }

  runScanner() {
    this.setState({ showReader: true });
  }

  onScan(data) {
    if (data) {
      this.setState(
        {
          assetID: data,
          showReader: false,
        },
        () => {
          this.getAsset();
        }
      );
    }
  }

  onSearchChange(e) {
    this.setState({ assetID: e.target.value });
  }

  getAsset() {
    this.amb
      .getAssetById(this.state.assetID)
      .then(resp => {
        this.setState({
          assetValid: true,
          showDialog: true,
          showReader: false,
        });
      })
      .catch(err => {
        this.setState({
          assetValid: false,
          showDialog: true,
          showReader: false,
        });
      });
  }

  dismissDialog() {
    this.setState({
      showDialog: false,
      assetID: null,
      assetValid: null,
    });
  }

  render() {
    const { showReader, delay, showDialog, assetValid } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="app__wrapper mdc-card">
          <Search
            onSearchChange={this.onSearchChange}
            onSearch={this.getAsset}
          />
          <Divider />
          {showReader ? (
            <Scanner onScan={this.onScan} delay={delay} />
          ) : (
            <StartButton onClick={this.runScanner} />
          )}
        </div>
        <ResultDialog
          show={showDialog}
          dismissDialog={this.dismissDialog}
          valid={assetValid}
        />
      </div>
    );
  }
}
