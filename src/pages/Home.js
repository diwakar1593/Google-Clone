import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <p>About</p>
                    <p>Store</p>
                </div>

                <div className="home__headerRight">
                    <p>Gmail</p>
                    <p>Images</p>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
        </div>
    )
}

export default Home