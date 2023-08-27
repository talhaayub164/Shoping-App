export function Cart(){
    return(
        <>
         <section id="row7">
                <div className="row7">
                    <img src="shop-banner.jpg" alt="img" />
                    <h1>#cart!</h1>
                    <h4>Add your coupens & SAVE upto 700% OFF!</h4>
                </div>
            </section>
            <section id="cart">
            <table>
        <thead>
            <tr>
                <th>REMOVE</th>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUB TOTAL</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i class="fa-solid fa-trash"></i></td>
                <td><img src="t2.webp" alt=""/></td>
                <td>T-Shirts for man</td>
                <td>$119.00</td>
                <td><input type="number" name="" id="" value="1"/></td>
                <td>$119.00</td>
            </tr>

            <tr>
                <td><i class="fa-solid fa-trash"></i></td>
                <td><img src="t2.webp" alt=""/></td>
                <td>T-Shirts for man</td>
                <td>$119.00</td>
                <td><input type="number" name="" id="" value="1"/></td>
                <td>$119.00</td>
            </tr>

            <tr>
                <td><i class="fa-solid fa-trash"></i></td>
                <td><img src="t2.webp" alt=""/></td>
                <td>T-Shirts for man</td>
                <td>$119.00</td>
                <td><input type="number" name="" id="" value="1"/></td>
                <td>$119.00</td>
            </tr>
            <tr>
                <td><i class="fa-solid fa-trash"></i></td>
                <td><img src="t2.webp" alt=""/></td>
                <td>T-Shirts for man</td>
                <td>$119.00</td>
                <td><input type="number" name="" id="" value="1"/></td>
                <td>$119.00</td>
            </tr>
        </tbody>
    </table>
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
    )
}