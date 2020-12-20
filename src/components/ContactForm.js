import emailjs from 'emailjs-com'
import '../styles/contactform.scss'


export default function ContactForm() {
    // https://www.youtube.com/watch?v=NgWGllOjkbs
    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            e.target,
            `${process.env.REACT_APP_USER_ID}`
        )
        .then(result => {
          alert("Your email was sent successfully. Thank you!")
        }, error => {
            alert("Something went wrong. Check your connection or try again later.")
        })
        e.target.reset()
    }


    return (
        <div className="form-container">

            <div className="contact-me">
                <h1>Contact Me</h1>
                <p>Send an email to get in touch. <span>(built with EmailJS)</span></p>
                <span><p>*&nbsp;</p>= required</span>
            </div>

            <form onSubmit={sendEmail}>

                <section className="first-row">
                    <div className="name">
                        <label>Name<span>*</span></label>
                        <input name="name" required type="text" placeholder="Jane Smith" />
                    </div>
                    <div className="email">
                        <label>Email<span>*</span></label>
                        <input required name="email" type="text" placeholder="example@gmail.com" />
                    </div>
                </section>

                <section className="second-row">
                    <div className="subject">
                        <label>Subject</label>
                        <input name="subject" type="text" placeholder="Would Love to Hire You"/>
                    </div>
                </section>

                <section className="third-row">
                    <div className="message">
                        <label>Message<span>*</span></label>
                        <textarea name="message" required placeholder="I thought your portfolio was just incredible" />
                    </div>
                </section>

                <section className="submit-btn">
                    <button value="Send" type="submit" >Send</button>
                </section>

            </form>

        </div>
    )
}