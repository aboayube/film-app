import React from 'react';
import'./Header.css'
export default({black})=>{
    return(
        <header className={black?'black':''}>
            <div className="header--logo">
                <a href="/">
            
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/netflix-1571720979.jpg"/>  </a>
            </div>
            <div class="header--user">
                <a href="">
                    <img src="https://via.placeholder.com/150"/>
                </a>
            </div>
        </header>
    )
}