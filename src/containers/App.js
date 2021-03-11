import React, { StrictMode, useState } from 'react';
// import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { allVtubers } from '../components/allVtubers';
import { setSearchField, enableDarkMode } from '../actions'
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import Sidebar from '../components/Sidebar';
import Darkmode from '../components/Darkmode';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import { Helmet } from 'react-helmet';

// Hook을 쓰지 않고 클래스로 할 경우
// const mapStateToProps = (state) => {
//     return {
//         searchField: state.searchField
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSearch: (event) => dispatch(setSearchField(event.target.value))
//     }
// }

const App = () => {

    const searchField = useSelector(state => state.searchVtubers.searchField)
    const background = useSelector(state => state.enableDarkMode.background)
    // useSelector는 mapStateToProps 와 비슷한 역할을 한다.
    const dispatch = useDispatch()
    // useDispatch는 mapDispatchToProps 와 비슷한 역할을 한다
    // useState(초기값)는 state와 state를 변경시키는 함수를 반환 
    const [Vtubers, ] = useState(allVtubers)
    // const [background, setBackground] = useState('body { background-color: black; }')

    // constructor() {
    //     super();
    //     this.state = {
    //         Vtubers: Vtubers,
    //         searchfield: '',
    //         background: 'body { background-color: black; }',
    //     };
    // };

    // 만약 componentDidMount()를 썼다면 useEffect로 대체
    // 두번째 인자는 배열 안의 값이 바뀔때만 첫번째 함수를 실행하라는뜻
    // 만약 아무것도 넣지 않으면 무한으로 첫번째 파라미터(함수)를 실행
    // 빈 배열을 넣으면 처음 시작할때만 실행
    // useEffect(() => {
    //     fetch('https://blarblar.com')
    //     .then(response => response.json())
    //     .then(data => setVtubers(data))
    // }, [])

    // const enableDarkMode = () => {
    //     background.includes('white') ?
    //         setBackground('body { background-color: black; }') :
    //         setBackground('body { background-color: white; }')
    //     }


    const filteredVtubers = Vtubers.filter(Vtubers => {
    return Vtubers.name.toLowerCase().includes(searchField.toLowerCase())
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

                <div className='head'>
                <Darkmode enableDarkMode={() => dispatch(enableDarkMode())}/>
                <h1 className='f1'>Hologate</h1>
                <SearchBox searchChange={(event) => dispatch(setSearchField(event.target.value))} />
                </div>

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

// class를 쓴다면 아래처럼
// export default connect(mapStateToProps, mapDispatchToProps)(App);