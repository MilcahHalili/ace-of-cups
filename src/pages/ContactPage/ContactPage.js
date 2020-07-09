import React, { Component } from 'react'
import './ContactPage.scss'
import { SocialIcon } from 'react-social-icons'


class ContactPage extends Component {
    render() {
        return (
            <div>
                <p className='contact-title'>Contact Us</p>
                <p className='contact-info'>
                    For more information on this tarot deck, Small Spells, and Rachel Howe's other work, visit her site below.
                    <div className='social-icons'>
                        <SocialIcon 
                            style={{ height: 45, width: 45 }}
                            bgColor="white"
                            fgColor='black'
                            url="https://www.instagram.com/smallspells/" 
                        />
                        <SocialIcon 
                            style={{ height: 45, width: 45 }}
                            bgColor="white"
                            fgColor='black'
                            url="https://www.smallspells.com/" 
                        />
                    </div>
                    To learn more about the creator of this app, check out her portfolio or instagram below. Feel free to reach out with any questions!
                    <div className='social-icons'>
                        <SocialIcon 
                            style={{ height: 45, width: 45 }}
                            bgColor="white"
                            fgColor='black'
                            url="https://www.instagram.com/paula__dixon/" 
                        />
                        <SocialIcon 
                            style={{ height: 45, width: 45 }}
                            bgColor="white"
                            fgColor='black'
                            url="https://pauladixon.software/" 
                        />
                    </div>

                </p>
            </div>
        )
    }
}

export default ContactPage