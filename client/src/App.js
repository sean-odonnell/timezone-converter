import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  state = { 
            timezones: [],
            initial-zone-search-term: 'pacific',
            selected-zone: 'pacific',
            GMT-time: '1200',
            GMT-day: 'Monday',
            selected-zone-time: "0200",
            selected-zone-day: "Tuesday",
            compare-zone-search-term: 'denver',
            compare-zone-time: "0300",
            compare-zone-day: "Tuesay"
          }

  componentDidMount() {
    this.getTimeZoneList();
    this.getGMTTime();
  }

  getTimeZoneList = () => {
    fetch('/api/timezones')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
