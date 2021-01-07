import React from 'react';

const Card = ( {name, img, gen, youtube, twitter} ) => {
    return (
     <div className='tc bg-light-blue dib br3 pd3 ma2 grow bw2 shadow-5'>
        <img src={img} width='200px' height='200px' alt='vtuber' className='br3'/>
        <div>
            <h2>{name}</h2>
            <h3>{gen}</h3>
            <a rel="noreferrer" target='_blank' href={youtube}><img src='https://pbs.twimg.com/profile_images/1308106203860529152/yOwTDF9G_400x400.jpg' className='pd3 shadow-5 dib br3' width="40px" height="40px" alt='youtube'/></a>
            <a rel="noreferrer" target='_blank' href={twitter}><img src='https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_400x400.jpg' className='pd3 shadow-5 dib br3' width='40px' height='40px' alt='twitter'/></a>
        </div>
     </div>
    );
}

export default Card;