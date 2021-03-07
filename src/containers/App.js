import {Component} from 'react';
import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],                //these two are our states and this state is what describes our app and it is something that can change and affect our app. And they live in the parent component,the component that is the parent just kind of passes the state to diff. components And now I can access robots not from ere, but from 'this.state.robots'. Now cardlist accepts robots as prop though it is a state in App Because App now owns 'state' that includes 'robots' . It ios allowed to change it
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')                 //returns a promise                      
        .then(response => response.json())                                  //Json is an in built func provided by fetch or js to parse a json file without using JSON.parse() func
        .then(users => this.setState({robots: users}));   
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        return !robots.length ?
               <h1 className='tc'>Loading</h1> :
            (   <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                       <ErrorBoundary>
                         <CardList robots = {filteredRobots} />
                       </ErrorBoundary>
                    </Scroll>
                </div>
        
            );
   

    }
    
}

// const App = () => {
//     return(
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots = {robots} />
//         </div>

//     );
// }

export default App;