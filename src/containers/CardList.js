import React from 'react';
import Card from '../components/Card' 

const CardList = ( {Vtubers} ) => {
    
    const cardArray = Vtubers.map((user, i) => {
        return (
                <Card key={i} 
                id={Vtubers[i].id} 
                name={Vtubers[i].name} 
                img={Vtubers[i].img} 
                gen={Vtubers[i].gen} 
                youtube={Vtubers[i].youtube} 
                twitter={Vtubers[i].twitter}/>
        );
    })
    
    return (
    <div className='fl w-80 pa2'>
        {cardArray}
    </div>
    );
}

export default CardList;