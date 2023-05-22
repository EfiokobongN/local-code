import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo5 from '../../assets/images/logo_5.png';

import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo5} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />

            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active " to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink exact="true" activeclassname="active " className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>


            <ul>
                <li >
                    <a
                        target="_blank"
                        rel='noreferrer' href='/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                    </a> 
                </li>

                <li >
                    <a
                        target="_blank"
                        rel='noreferrer' href='/'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a> 
                </li>

                <li >
                    <a
                        target="_blank"
                        rel='noreferrer' href='/'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a> 
                </li>

                <li >
                    <a
                        target="_blank"
                        rel='noreferrer' href='/'>
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a> 
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;