import React from 'react';
import {Link} from 'react-router-dom'
import {HeaderArea} from './styled';

import {isLogged} from '../../../helpers/AuthHandler'
import NotFound from  '../../../pages/NotFound'

const Header = () => {
    let logged = isLogged();

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
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-acconunt">Minha conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button" to="">Poste um anuncio</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button" to="">Poste um anuncio</Link>
                                </li>
                            </>
                        }              
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;
                       
