import emailjs from 'emailjs-com'
import '../styles/contactform.scss'


export default function ContactForm() {

    // emailjs.get

    return (
        <>
            <h3 className="contact-me">Contact Me</h3>
            <div className="contact-form-container">
                <form id="contact-form">
                    <div className="name-email">
                        <div>
                            <p>Name:</p>
                            <input
                                type='text'
                                name='name'
                                value={null}
                                onChange={null}
                                />  
                        </div>
                        <div>
                            <p>Email:</p>
                            <input
                                type='email'
                                name='email'
                                value={null}
                                onChange={null}
                                />
                        </div>
                    </div>
                    <div className="message">
                        <textarea 
                            rows="5"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}


// adding emailjs form and sign up for emailjs