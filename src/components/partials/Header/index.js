import React from 'react';
import {Link} from 'react-router-dom'
import {HeaderArea} from './styled';

const Header = () => {
    return(
        <HeaderArea>
            <div className={'container'}>
                <div className="logo">
                    <Link to='/'>
                        <span className="logo1">O</span>
                        <span className="logo2">L</span>
                        <span className="logo3">X</span>
                    </Link>
                </div>
                ...
            </div>
        </HeaderArea>
    )
}

export default Header;
