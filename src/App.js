import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
      super(); 

      this.state = {
        monsters: [], // End of monster array in the state method
      }; // End of state method 
    
      console.log('constructor');
  }  
  
  componentDidMount() {
    
    console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          return {monsters: users}
      },
      () => {
         //console.log(this.state.monsters);
      }
      ));
  }

  render(){
      console.log('Render');
      return (
      <div className="App">
          {
            // we are using map method to iterate through array setting up id number to the object and push object 
            this.state.monsters.map((monster) => {
                return <div key={monster.id}> <h1>{monster.name}</h1></div>
            })
          }
      </div>
      );
    }
}

export default App;
