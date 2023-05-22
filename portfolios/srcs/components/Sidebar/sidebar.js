import './sidebar.scss';
import Logo5 from '../../assets/images/logo_5.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faInstagram, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo5} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='faith'/>
            </Link>

            <nav>
            <NavLink exact="true" activeclassname="active"  to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>

                <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>

               

                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/faith-nelson-1a7463213'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/faith-nelson-1a7463213'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/faith-nelson-1a7463213'>
                        <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/faith-nelson-1a7463213'>
                        <FontAwesomeIcon icon={faTwitch} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/faith-nelson-1a7463213'>
                        <FontAwesomeIcon icon={faDiscord} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.instagram.com/faith.nelson5'>
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                    </a>
                </li>

                
               
            </ul>
        </div>
    )
}

export default Sidebar;