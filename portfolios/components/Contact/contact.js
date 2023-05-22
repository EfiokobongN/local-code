import AnimatedLetters from '../AnimatedLetters/animated';
import './contact.scss';
import Loader from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';




const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef;

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'gmail',
                'template_0jmmb2m',
                refForm.current,
                '8ja_E5T18B6bv_DWxXWxa'
        )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
        )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArry={['C', 'a', 'n', 't', 'a', 'c', 't', '', 'M', 'e',]} idx={15}/>
                    </h1>
                    <p>
                    I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='firstname' required/>
                                </li>  

                                <li className='half'>
                                    <input type="text" name='name' placeholder='lastname' required/>
                                </li>  

                                <li className='half'>
                                    <input type="text" name='email' placeholder='email' required/>
                                </li>  

                                <li >
                                    <input placeholder='subject' type="text" name='name'  required/>
                                </li>  

                                <li>
                                    <textarea placeholder='message' name='message' required></textarea>
                                </li>

                                <li >
                                    <input type="submit"  className='flat-button' value="send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Faith Nelson,
                    <br />
                    Serbia,
                    <br />
                    Branka Radicevica 21, 22000
                    <br />
                    Sremska Mitrovica <br />
                    <span>Fmailpreciousnelson@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoon={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                        <Popup>Faith lives here, come over for a cup of coffee : </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
            </>
    )
}

export default Contact;