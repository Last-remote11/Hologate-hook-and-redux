import React, { StrictMode } from 'react';
import { Vtubers } from '../components/Vtubers';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Darkmode from '../components/Darkmode';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';




class App extends React.Component {

    constructor() {
        super();
        this.state = {
            Vtubers: Vtubers,
            searchfield: '',
            background: 'tc bg-near-black',
        };
    };

    enableDarkMode = () => {
        this.state.background.includes('bg-near-black') ?
            this.setState( {background: 'tc bg-white'} ) :
            this.setState( {background: 'tc bg-near-black'} )
        }

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
                <div className={this.state.background}>
                    <title>Hologate</title>
                    <Darkmode enableDarkMode={this.enableDarkMode}/>
                    <h1 className='f1'>Hologate</h1>
                    <SearchBox searchChange={this.onSearch} />
                    <Scroll>
                        <ErrorBoundary>
                        <CardList Vtubers={ filteredVtubers }/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            </StrictMode>)};
    }
};

export default App;