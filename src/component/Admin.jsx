import React,{useState} from 'react'
export function Admin(){
  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");
  const [loggedIn,setLoggedIn] = useState("");
  const handleSubmit = () => {
      if (user === 'talha' && password === '12345') {
          setLoggedIn(true);

        } else {
          alert('Username or password is incorrect. sorry, please try again');
        }
      };
  return(
    <>
    
    <div className="login">
      <h1>Login Foam</h1>
      <input type='text' id='in1' placeholder='Enter user name' value={user} onChange={(e) => setUser(e.target.value)}/>
      <br/>
      <input type='password'id='in2' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button id='submint' onClick={handleSubmit}>Submit</button>
    </div>
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
    
    
  )

}

