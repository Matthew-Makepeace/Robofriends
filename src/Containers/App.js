import React, { Fragment, Component } from "react";
import './App.css'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'



class App extends Component {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>  this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
        })

        return !robots.length ? 
        <h1 className="tc f1">Loading . . .</h1> :
        (
            <Fragment>
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                     <Scroll>
                          <CardList robots={ filteredRobots }/>
                     </Scroll>          
                </div>
            </Fragment>
        );
    }
}

export default App;