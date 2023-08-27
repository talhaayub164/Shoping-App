import React,{useState}from 'react'

export function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [mesg,setMesg] = useState("");
    const handleSubmit = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMesg("");
    }
    
    return (
        <>
            <section id="row7">
                <div className="row7">
                    <img src="shop-banner.jpg" alt="img" />
                    <h1>#let's_talk</h1>
                    <h4>LEAVE A MESSAGE. We love to hear from you!</h4>
                </div>
            </section>
            <section id="row19">
                <div className="row19">
                    <p>GET IN TOUCH</p>
                    <h1>Visit one of our agency locations or contact us today</h1>
                    <h2>Head Office</h2>
                    <p>Islamabad, Pakistan</p>
                    <p>Contact@gmail.com</p>
                    <p>+923315517303</p>
                    <p>Monday to Saturday 9:00 am to 4:00 pm</p>
                </div>
                <div className="map">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.9790014649686!2d73.0506137!3d33.595121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb8621c4c6a21%3A0x67e4ff6ec7e2cc95!2sYour%20Location%20Here!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen=""
                    />
                </div>
            </section>
            <section id="row20">
                <div className="row20">
                    <p>LEAVE A MESSAGE</p>
                    <h2>We love to hear from you</h2>
                    <input type="text" id="inputb1"placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <br/> <br/>
                    <input type="text" id="inputb1"placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br/> <br/>
                    <input type="text" id="inputb1"placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <br/> <br/>
                    <textarea name=""  cols="66" rows="7" id="msg" value={mesg} onChange={(e) => setMesg(e.target.value)}/>
                    <br/><br/>
            <button type="submit" onClick={handleSubmit} id="subbtn">Submit/</button>
                </div>
            </section>
            <section id='row6'>
    <div className="row6">
                <img src ="herobackimg1.jpg" alt='img'  />
                <h1>Sign Up For Newslatters</h1>
                <h4>Get E-mail updates about our latest shop and <span>special offers</span></h4>
            </div>
            <div className="input">
                <input type="text" id='email' placeholder='Enter your email address'/>
                <button id='sign'>Sign Up</button>
            </div>
    </section>
    <section id='footer'>
            <div className="lfooter">
                <img src='Daraz-Logo.png' alt='logo'/>
                <h1>Contact</h1>
                <p><span>Address :</span> Willington Road Streat 32</p>
                <p><span>Phone</span>+23000112233,+048123456</p>
                <p><span>Hours :</span>10:00 - 18:00 Mon - Sat</p>

            </div>
            <div className="footer1">
                
                <h1>About</h1>
                <p>About Us <br/>Delivery Information <br/>Privacy Policy <br/>Term & Condition <br/>Contact Us</p>
                
            </div>
            <div className="footer1">
                <h1>My Account</h1>
                <p>Swing In <br/>View Cart <br/>My Wishlist <br/>Track My Order <br/>Help</p>
            </div>
            <div className="footer1">
                <h1>Install App</h1>
                <p>From App Stor Or Google Play Stor</p>
                <div class="appstore">
                    <i class="fa-brands fa-apple pos"></i>
                    <p>Download on the <br/>App Store</p>
                    
            </div>
                 <div className="playstore">
                    <p id='p1'>Download Google<br/>Play Store</p>
                    <h4>Secured Payment Gateways</h4>
                    <img src='master.png' alt='img'/>
                 </div>
            </div>
        </section>
        </>
    );
}
