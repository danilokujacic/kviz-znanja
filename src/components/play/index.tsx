import React from 'react';
import User from '../../interfaces/User';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Play: React.FC = () => {
    return (
        <div className='start-quiz'>
            <Link to='/choose-quiz'>Start</Link>
        </div>
    );
};

export default Play;
