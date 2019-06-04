import React, { Component } from 'react';
import "../../assests/css/common/base.css";
import "../../assests/css/common/header.css";

class Header extends Component {
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
            marginLeft:"0px",
            width:"0"
        }
        if(this.state.isSlideNav)
        {
            slideNav={
                width:"270px"
            }
            console.log(slideNav)
        
        }
        return (
            <React.Fragment>
                <section className="header">
                <div className="showFilter" onClick={this.closeNav}>
                            <a><i class="fa fa-filter"></i> Show Filter</a>
                        </div>
                    <div className="new-row display-lg">
                        
                        <div className="col-2">
                            <div className="header__select-city-options">
                                <select name="city" className="header__select-city">
                                    <option value="" selected="selected">Select City</option>
                                    <option value="1">Bangalore</option>
                                </select>
                                <i class="fa fa-chevron-down input-icon header__select-input-icon"></i>
                            </div>
                        </div>
                        <div className="col-6">
                            <h1>Hello</h1>
                        </div>
                        <div className="col-4">
                        <div className="header__select__bhk__price">
                            <div className="header__select-bhk">
                                <select name="city" className="header__select-bhk-option">
                                    <option value="" selected="selected">BHK</option>
                                    <option value="1">BHK 1</option>
                                    <option value="1">BHK 2</option>
                                    <option value="1">BHK 3</option>
                                    <option value="1">BHK 4</option>
                                    <option value="1">BHK 5</option>
                                </select>
                                <i class="fa fa-chevron-down input-icon header__bhk-input-icon"></i>
                            </div>
                            <div className="header__select-price">
                                    <select name="city" className="header__select-bhk-option">
                                        <option value="" selected="selected">Price</option>
                                        <option value="1">Less than 1 crore</option>
                                        <option value="1">50L-1Cr</option>
                                        <option value="1">More than 1Cr</option>
                                    </select>
                                    <i class="fa fa-chevron-down input-icon header__bhk-input-icon"></i>
                                    </div>
                                    <div className="clear">
                                    <a href="javascript:void(0);" title="clear"  class="header__clear-all" rel="nofollow"><i class="fa fa-sync-alt icon-refresh"></i> </a>
                            </div>
                        </div>
                        
                        </div>

                    </div>
                </section>
                <section className="slide-navigation" style={slideNav}>
                    <nav className="slide-navigation-left">
                        <ul>
                            <li className="slide-navigation__text">
                                <span>Filter</span>
                                <a  title="clear" class="slide-navigation__clear-all" rel="nofollow"><i class="fa fa-sync-alt icon-refresh"></i> Clear</a>
                            </li>
                            <li>
                                <select name="city" className="slide-navigation__select-city">
                                    <option value="" selected="selected">Choose City</option>
                                    <option value="1">Bangalore</option>
                                </select>
                                <i class="fa fa-chevron-down input-icon slide-navigation__select-input-icon"></i>
                            </li>
                            <li>
                                <select name="city" className="slide-navigation__select-city">
                                    <option value="" selected="selected">Choose Area</option>
                                    <option value="1">Bangalore</option>
                                </select>
                                <i class="fa fa-chevron-down slide-navigation__select-input-icon"></i>
                            </li>
                            <li>
                                <select name="city" className="slide-navigation__select-city">
                                    <option value="" selected="selected">Choose Builder</option>
                                    <option value="1">Bangalore</option>
                                </select>
                                <i class="fa fa-chevron-down  slide-navigation__select-input-icon"></i>
                            </li>
                            <li>
                            <div className="slide-navigation__select-bhk">
                                <select name="city" className="slide-navigation__select-bhk-option">
                                    <option value="" selected="selected">BHK</option>
                                    <option value="1">BHK 1</option>
                                    <option value="1">BHK 2</option>
                                    <option value="1">BHK 3</option>
                                    <option value="1">BHK 4</option>
                                    <option value="1">BHK 5</option>
                                </select>
                                <i class="fa fa-chevron-down input-icon slide-navigation__bhk-input-icon"></i>
                            </div>
                            </li>
                            <li>
                                    <select name="city" className="slide-navigation__select-bhk-option">
                                        <option value="" selected="selected">Price</option>
                                        <option value="1">Less than 1 crore</option>
                                        <option value="1">50L-1Cr</option>
                                        <option value="1">More than 1Cr</option>
                                    </select>
                                    <i class="fa fa-chevron-down input-icon slide-navigation__bhk-input-icon"></i>
                                  
                            </li>
                        </ul>
                    </nav>
                </section>
            </React.Fragment>
        );
    }
}

export default Header;