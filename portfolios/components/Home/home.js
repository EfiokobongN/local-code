import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo_5.png';
import AnimatedLetters from '../AnimatedLetters/animated';
import './home.scss';
import Logo from './Logo/logo';
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['F', 'a', 'i', 't', 'h', '','N', 'e', 'l', 's', 'o', 'n'];
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _6`}>e</span>
                    <span className={`${letterClass} _8`}>l</span>
                    <span className={`${letterClass} _10`}>l</span>
                    <span className={`${letterClass} _12`}>o,</span>

                    
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>


                <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArry={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArry={jobArray} idx={22}/>

                </h1>
                
                <h2>Frontend Developer / Javascript/ React Expert / Freelancer</h2>

                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

            <Logo/>
            </div> 
            <Loader type="pacman"/>
       </>
    )
}

export default Home;