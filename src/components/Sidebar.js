import React, { StrictMode } from 'react';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <StrictMode>
            <div className='fl w-10 pa2 shadow-5 ba2 b--purple dim'>
                <h1>여기에 뭘 넣을까??</h1><br></br>
                <a href='https://en.hololive.tv/' rel="noreferrer" target='_blank'><h2>Hololive official homepage(EN)</h2></a><br></br>
                <a href='abc'>test</a><br></br>
                <a href='abc'>test</a><br></br>
                <a href='abc'>test</a>
            </div>
        </StrictMode>
    )
        
    }

export default Sidebar