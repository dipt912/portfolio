import React from 'react';

import about from '../assets/images/about/creative.png';
import lfzLogo from '../assets/images/about/lfz-logo.png';
import calpolyLogo from '../assets/images/about/cp-logo.png';
import kingstonLogo from '../assets/images/about/kingston-logo.png';


export default props => {

    return (
        <section id='about'>
            <div className="container">
                <h3 className='white-color'>Who Am I?</h3>
                <hr className='white-color' />
                <p className='text-faded'>I finished bachelor of electronics from Sardar Patel University, India. In 2014 came united states for master of science. From last three year I am plying with web technogies</p>
                <div className='row'>
                    <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me" />
                </div>
            </div>
        </section>
    );
}