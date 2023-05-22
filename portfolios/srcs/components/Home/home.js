import './home.scss';
import LogoTitle from '../../assets/images/logo_5.png';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animate';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
   const nameArray = ['a', 'i', 't', 'h']
   const  jobArray = ['  W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '']
    useEffect(() => {
        return setTimeout (() =>{
            setLetterClass('text-animate-hover')
        }, 400)
    })
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>

                <h2>Frontend Developer / Javascript Expert / React / Freelance</h2>

            <h5 className='flat-button'>CONTACT ME</h5>
            </div>
        </div>
    )
}

export default Home;