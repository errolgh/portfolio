import emailjs from 'emailjs-com'
import '../styles/contactform.scss'


export default function ContactForm() {
    // https://www.youtube.com/watch?v=NgWGllOjkbs
    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm('service_p2tmakp', 'template_riz2nyv', e.target, 'user_2yrJa4tMcH6vhEqJprZIe')
        .then(result => {
          console.log(result.text)
        }, error => {
          console.log(error.text)
        })
        e.target.reset()
        //add async "success" modal
        //add async "something went wrong, check your connection or try again later" modal
    }


    return (
        <div className="form-container">

            <div className="contact-me">
                <h1>Contact Me</h1>
                <p>Send an email to get in touch. <span>(built with EmailJS)</span></p>
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