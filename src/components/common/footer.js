import React, { Component } from 'react';
import '../../assests/css/common/footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer>
                    <div class="footer" >
   <div class="footer-details">
      <div class="row1"  >
         <div class="column1">
            <h2 class="footer-heading">About Us</h2>
            <p className="footer-text">40 Squares is a real estate advisory brand that is founded on the cornerstone of quality and dependability. We have deep expertise in the real estate market in and around Bangalore, and can be relied upon for ethical and transparent dealings. We aspire to be the real estate advisors of choice for those looking for their dream investments.</p>
            <p className="footer-text">At 40 Squares, we are inspired by our customer’s dreams, and our vision is to provide you with luxurious living at affordable prices. We do not compromise on our values and ethics, and our principles are simple- we adhere to the highest quality benchmarks in everything we do! Whether you are looking for an apartment, a villa or a plot, we bring you investments in approved projects that spell quality at the most affordable prices. Come to us for the best options, with loan approvals from leading banks.</p>
            <p className="footer-text footer-text-end"> Call us for a site visit today!</p>
         </div>
         <div class="column2" >
            <h2 class="footer-heading">Quick links</h2>
            <p  className="footer-quick-links footer-qucik-links-head">Home</p>
            <p  className="footer-quick-links">Apartments</p>
            <p  className="footer-quick-links">Villas</p>
            <p  className="footer-quick-links">Plots</p>
            <p  className="footer-quick-links">About Us</p>
            <p  className="footer-quick-links">Terms Conditions</p>
            <p  className="footer-quick-links">Disclaimer</p>
            <p  className="footer-quick-links">Contact Us</p>
         </div>
         <div class="column3" >
            <h2  class="footer-heading">Contact Us</h2>
            <p class="footer-text">
                40squares Developers<br/>
                #10, Jakkasandra Main Road, Reliable Plaza, 14th Cross,<br/>
                Sector 5, HSR Layout<br/>
                Bangalore, Karnataka , 560102<br/>
                India<br/>
   
            </p>
            <p className="footer-quick-links"> <i class="fa fa-phone"></i> +91 78488 83344</p>
            <p><i class="fa fa-envelope"></i> info@40squares.com</p>
            <p className="footer-join-us">Join Us on <i class="fab fa-facebook-f icon-social"></i>
            <i class="fab fa-twitter icon-social"></i></p>
         </div>
      </div>
      <hr></hr>
      <div class="footer-copy">
         © Copyright 2016, All Rights Reserved, 40squares Inc.
      </div>
   </div>

</div>
            </footer>
         );
    }
}
 
export default Footer;