import React from 'react'
import pfp from '../public/pfp.jpg'

export default function Info(){

    return(
        <div className='component' id="info">
            <div className='imagecontainer'>
            <img id ="thepfp" src={pfp} />
            </div>
            <div className='infotext-container'>
                <div id="name">Samarth Saxena</div>
                <div id="whatido">Frontend Developer, Technical Writer</div>
                <div id="website"><a href="https://awesamarth.hashnode.dev" target="_blank">awesamarth.hashnode.dev</a></div>

            </div>
        </div>
    )

}