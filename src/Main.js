import React from 'react';
import electronic from './electronic.png';

const Main = ({handleLogOut}) => {

    return(
        <section className="main">
           
        <nav>
        <img src={electronic} style={{height:'auto',width:'100%'}} alt="main"  />
        <button onClick={handleLogOut}>Logout</button>
        
        </nav>
        
        </section>
    );
};

export default Main;