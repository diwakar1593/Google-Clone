import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import "./Home.css";
import Search from './Search.js';
function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <p><a href="#">About</a></p>
                    <p><a href="#">Store</a></p>
                </div>

                <div className="home__headerRight">
                    <p>Gmail</p>
                    <p>Images</p>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo"/>
                <div className="home__inputContainer">
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home;