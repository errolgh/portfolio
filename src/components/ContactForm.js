import emailjs from 'emailjs-com'
import '../styles/contactform.scss'


export default function ContactForm() {

    // emailjs.get

    return (
        <div className="form-container">

            <div className="contact-me">
                <h1>Contact Me</h1>
                <p>Send an email to get in touch with me.</p>
            </div>

            <form>
                <section className="first-row">
                    <div className="name">
                        <label>Name</label>
                        <input type="text" placeholder="Maya Angelou" />
                    </div>
                    <div className="email">
                        <label>Email</label>
                        <input type="text" placeholder="example@gmail.com" />
                    </div>
                </section>

                <section className="second-row">
                    <div className="subject">
                        <label>Subject</label>
                        <input type="text" placeholder="I would like to hire you"/>
                    </div>
                </section>

                <section className="third-row">
                    <div className="message">
                        <label>Message</label>
                        <textarea placeholder="I just thought your portfolio was incredible" />
                    </div>
                </section>
                <section className="submit-btn">
                    <button>Send</button>
                </section>
            </form>

        </div>
    )
}


// adding emailjs form and sign up for emailjs
{/* <h3 className="contact-me">Contact Me</h3>
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
        <div className="subject">
            <input 
                type='text' 
                name='subject'
            />
        </div>
        <div className="message">
            <textarea 
                rows="5"
            />
        </div>
    </form>
</div> */}