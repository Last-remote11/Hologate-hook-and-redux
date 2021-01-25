import React, { StrictMode, useState, useEffect } from 'react';
import { allVtubers } from '../components/allVtubers';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Sidebar from '../components/Sidebar';
import Darkmode from '../components/Darkmode';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import {Helmet} from 'react-helmet';




const App = () => {

    // useState(초기값)는 state와 state를 변경시키는 함수를 반환 
    const [Vtubers, setVtubers] = useState(allVtubers)
    const [searchfield, setSearchfield] = useState('')
    const [background, setBackground] = useState('body { background-color: black; }')

    // constructor() {
    //     super();
    //     this.state = {
    //         Vtubers: Vtubers,
    //         searchfield: '',
    //         background: 'body { background-color: black; }',
    //     };
    // };

    // 만약 componentDidMount()를 썼다면 useEffect로 대체
    // 두번째 파라미터에서는 배열 안의 값이 바뀔때만 첫번째 함수를 실행하라는뜻
    // 만약 아무것도 넣지 않으면 무한으로 첫번째 파라미터(함수)를 실행
    // 빈 배열을 넣으면 처음 시작할때만 실행
    // useEffect(() => {
    //     fetch('https://blarblar.com')
    //     .then(response => response.json())
    //     .then(data => setVtubers(data))
    // }, [])

    const enableDarkMode = () => {
        background.includes('white') ?
            setBackground('body { background-color: black; }') :
            setBackground('body { background-color: white; }')
        }

    const onSearch = (event) => {
        setSearchfield(event.target.value);
    };


    const filteredVtubers = Vtubers.filter(Vtubers => {
    return Vtubers.name.toLowerCase().includes(searchfield.toLowerCase())
        });
    
    if (!Vtubers) {
        return <h1>loading...</h1>
    } else {
    return (
        <StrictMode>
            <div className='tc'>
                <Helmet>
                    <style>{background}</style>
                </Helmet>
                <title>Hologate</title>
                <Darkmode enableDarkMode={enableDarkMode}/>
                <h1 className='f1'>Hologate</h1>
                <SearchBox searchChange={onSearch} />
                    <Sidebar/>   
                {/* <Scroll> */}
                    <ErrorBoundary>
                    <CardList Vtubers={ filteredVtubers }/>
                    </ErrorBoundary>
                {/* </Scroll> */}
            </div>
        </StrictMode>
        )};
};

export default App;