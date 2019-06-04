import React, { Component } from 'react';
import logo from '../../assests/images/logo-black.png';
import '../../assests/css/common/topheader.css'
class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSlideNav:false
         }
    }
    closeNav=()=>{
        console.log("hello")
        const isSlide=!this.state.isSlideNav;
        this.setState({
            isSlideNav:isSlide
        })
    }
    render() { 
        let slideNav={
            marginRight:"0px",
            width:"0px"
        }
        if(this.state.isSlideNav)
        {
            slideNav={
                width:"250px"
            }
            console.log(slideNav.width)
        
        }
        return ( 
            <header className="topheader">
                 <nav className="flex-nav">
                        <a className="flex-img"><img src={logo} /></a> 
                        <a className="flex-container display-lg"> Apartments </a>
                        <a className="flex-container display-lg">Villas</a>
                        <a className="flex-container display-lg">Plots</a>
                        <a className="flex-container display-lg"> <i class="fa fa-phone fa-phone-icon"></i>+919949730470</a>
                        <a className="flex-container display-sm">Login</a>
                        <a className="flex-container " onClick={this.closeNav} style={{cursor:"pointer"}}><span className="flex-media">Menu</span>  <i className="fa fa-bars fa-toggile"></i></a>
                </nav>
                <nav id="mySidenav" class="sidenav" style={{width:slideNav.width}}>
                    <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Contact us</a>
                    <a href="#">Log in</a>
                    <a href="#"><h5 className="slide-text">Projects</h5></a>
                    <a href="#">Villas</a>
                    <a href="#">Plots</a>
                    <a href="#"><h5 className="slide-text">Need Any help?</h5></a>
                    <a href="#"><i class="fa fa-phone nav-phone-icon"></i> +91 9949 730470</a>
                    <a href="#"><i class="fa fa-envelope"></i><span className="mail-icon-space"> info@40squares.com</span> </a>
                    <a href="#" ><h5 className="slide-text">Join with us</h5><br/>
                    <span> <i class="fab fa-facebook-f icon-social-slider"></i>
                  <i class="fab fa-twitter icon-social-slider"></i></span> </a>
                </nav>
              
            </header>
         );
    }
}
 
export default TopHeader;