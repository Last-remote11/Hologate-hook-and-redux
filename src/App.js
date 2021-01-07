import React, { StrictMode } from 'react';
import { Vtubers } from './Vtubers';
import CardList from './CardList';
import SearchBox from './SearchBox';


// state가 있어야 페이지를 동적으로 만들 수 있음

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            Vtubers: Vtubers,
            searchfield: ''
        };
    }

    onSearch = (event) => {

        this.setState( {searchfield: event.target.value});
    }

    render() {
        const filteredVtubers = this.state.Vtubers.filter(Vtubers => {
        return Vtubers.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            });

        return (
            <StrictMode>
                <div className='tc'>
                <h1>Hololive</h1>
                <SearchBox searchChange={this.onSearch} />
                <CardList Vtubers={ filteredVtubers }/>
                </div>
            </StrictMode>
        );
    }
};

export default App;