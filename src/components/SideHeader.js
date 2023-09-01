import React from 'react';
import versustext from '../images/versustext.png';
import home from '../images/home.png';
import games from '../images/games.png';
import activity from '../images/activity.png';
import account from '../images/account.png';
import tips from '../images/tips.png';



const SideHeader = () => {
    return (
        <div className="container">
            <div className="side-header ml-14 mt-3">
                <img src={versustext} width={180} alt="versustext"/>
                <div className="h-[20px]"></div>
                <ul className="mt-3 side-panel font-bold">
                    <li className="pt 15 text-lg ml-1 pl-0.5 text-left">
                        <img src={home} alt="home" className="mb-4 w-9 sm:me-3 mx inline pt-6"/>
                        Home
                    </li>
                    <li className="pt 15 text-lg ml-1 pl-0.5 text-left">
                        <img src={games} alt="games" className="mb-4 w-9 sm:me-3 sm:mx-0 mx inline pt-6"/>
                        Games
                    </li>
                    <li className="pt 15 text-lg ml-1 pl-0.5 text-left">
                        <img src={activity} alt="activity" className="mb-4 w-9 sm:me-3 sm:mx-0 mx inline pt-6"/>
                        Activity
                        
                    </li>
                    <li className="pt 15 text-lg ml-1 pl-0.5 text-left">
                        <img src={account} alt="account" className="mb-4 w-9 sm:me-3 sm:mx-0 mx inline pt-6"/>
                        Account
                    </li>
                    <li className="pt 15 text-lg ml-1 pl-0.5 text-left">
                        <img src={tips} alt="tips" className="mb-4 w-9 sm:me-3 sm:mx-0 mx inline pt-4" />
                        Tips
                    </li>
                </ul>
            </div>  
            </div>       
    );   
}

export default SideHeader;

