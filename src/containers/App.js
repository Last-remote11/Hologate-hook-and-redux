import React, { StrictMode } from 'react';
import { Vtubers } from '../components/Vtubers';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


// state가 있어야 페이지를 동적으로 만들 수 있음

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            Vtubers: Vtubers,
            searchfield: ''
        };
    };

    onSearch = (event) => {
        this.setState( {searchfield: event.target.value});
    };

    render() {
        const filteredVtubers = this.state.Vtubers.filter(Vtubers => {
        return Vtubers.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            });
        
        if (!this.state.Vtubers) {
            return <h1>loading...</h1>
        } else {
        return (
            <StrictMode>
                <div className='tc'>
                <h1 className='f1'>Hologate</h1>
                <SearchBox searchChange={this.onSearch} />
                <Scroll>
                 <CardList Vtubers={ filteredVtubers }/>
                </Scroll>
                </div>
            </StrictMode>)};
    }
};

export default App;