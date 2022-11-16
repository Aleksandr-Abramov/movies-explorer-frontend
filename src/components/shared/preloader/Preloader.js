import React from 'react'
import './Preloader.css'

const Preloader = ({preloaderCondition}) => {
    return (
        <div className={`preloader ${preloaderCondition ? '' : 'preloader__open'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
