import React, { StrictMode } from 'react';
import { Vtubers } from '../components/Vtubers';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Sidebar from '../components/Sidebar';
import Darkmode from '../components/Darkmode';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import {Helmet} from 'react-helmet';




class App extends React.Component {

    constructor() {
        super();
        this.state = {
            Vtubers: Vtubers,
            searchfield: '',
            background: 'body { background-color: black; }',
        };
    };

    
    enableDarkMode = () => {
        this.state.background.includes('white') ?
            this.setState( {background: 'body { background-color: black; }'} ) :
            this.setState( {background: 'body { background-color: white; }'} )
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
                <div className='tc'>
                    <Helmet>
                        <style>{this.state.background}</style>
                    </Helmet>
                    <title>Hologate</title>
                    <Darkmode enableDarkMode={this.enableDarkMode}/>
                    <h1 className='f1'>Hologate</h1>
                    <SearchBox searchChange={this.onSearch} />
                        {/* <Sidebar/>   
                    <Scroll> */}
                        <ErrorBoundary>
                        <CardList Vtubers={ filteredVtubers }/>
                        </ErrorBoundary>
                    {/* </Scroll> */}
                </div>
            </StrictMode>
            )};
    }
};

export default App;