import './about.scss';
import AnimatedLetters from '../AnimatedLetters/animated';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3,  faHtml5,  faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', '', 'M', 'e',]}
                        idx={15} />
                    
                </h1>
                <p>
                I'm very ambitious front-end developer looking for a role in
            established WEB DEVELOPMENT AND CLOUD company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
                </p>

                <p>
                    
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
                </p>

                <p>
                If I need to define myself in one sentence that would be a friendly
            person with my client and others,  a Music fanatic,
            Design enthusiast, and tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031"/>
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faCloud} color="#5ED4F4"/>
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#EFD81D"/>
                    </div>
                </div>

            </div>

        </div>

            <Loader type="pacman" />
            </>
    )
}

export default About;