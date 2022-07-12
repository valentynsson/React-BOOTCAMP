import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super(); 
      this.state = {
          name: {firstname: 'Valentyn', lastname: 'Valentynsson'},
          company: 'ARDA - ÍSLAND'
      }
  }  
  
  render(){
      return (

       <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}
            </p>
            <button onClick= {() => {
                this.setState((state, props) => {
                  return {
                    name: {firstname: 'Andrei', lastname: 'Fedorec'},
                  }
                }, () => {
                    console.log(this.state);
                    //Hello world!
                });

            }} 
            >
            Change Name
            </button>
          </header>
        </div>
      );
    }
}

export default App;
