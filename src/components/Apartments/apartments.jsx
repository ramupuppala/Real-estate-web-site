import React, { Component } from 'react';
import "../../assests/css/apartments/apartments.css";
import DualImg from '../../assests/images/Main_page_02.jpg';
import Side1 from '../../assests/images/side1.jpg';


const ApartmentDetails = (props) => {
    return (
        <React.Fragment>
            <div className="card list-view">
                <div className="new-row">

                    <div className="col-3">
                        <div className="card__media-list">
                            <img src={DualImg} />
                        </div>

                    </div>
                    <div className="col-9">
                        <div className="new-row">
                            <div className="col-9 col-sm-9">
                                <h4 className="card__media-heading">
                                    Leafy Blocks
                                    </h4>
                                <p className="card__media-details">
                                    Owner’s Court, Kasavanahalli, off Sarjapura Road, By Inner Spaces
                                    </p>
                            </div>
                            <div className="col-3 col-sd-12 col-sm-3">
                                <div className="card__media_btn">
                                    <a href="#popup">
                                        <i className="fa fa-heart"></i>
                                        <button className="intersted-btn btn-warning">I'M INTERSTED</button>
                                        </a>
                                </div>
                            </div>

                        </div>
                        <ul className="item-list">
                            <li>
                                <span class="text-grey text-capitalize">Price</span>
                                <div>83.16 L - 91.08 L</div><small class="text-small"><i class="fa fa-inr"></i> 4200 - 4600 per sqft</small>
                            </li>
                            <li>
                                <span class="text-grey text-capitalize">Sqft</span>
                                <div>1980-1980</div>
                            </li>
                            <li>
                                <span class="text-grey text-capitalize">Status</span>
                                <div>Ready to Move</div>
                            </li>
                            <li>
                                <span class="text-grey text-capitalize">Units</span>
                                <div>8 Units</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className="apartment-details-right-side">
                            <h1>Contact</h1>
                        </div> */}

<div class="popup" id="popup">
        <div class="popup__content">
            <div class="popup__left">
                         <div class="popup-caption">
							<h3>Hilife Triflora</h3>
							<p>Varthur Gunjur Road, Bangalore</p>
							<span><i class="fa fa-inr"></i>29.39 L - 41.15 L</span>
						</div>

            </div>
            <div class="popup__right bg-white">
                <a href="#" class="popup__close">&times;</a>
                <h4 > I'M INTERESTED</h4>
                <form className="form-list">
                    <input type="text" name="name" value="" class="form-control" placeholder="Name"/>
                    <input type="email" name="email" value="" class="form-control" placeholder="Email"/>
                    <input type="text" name="name" value="" class="form-control" placeholder="Phone Number"/>
                    <textarea name="meassage" id="" cols="40" rows="5" class="form-control"  placeholder="Message"></textarea>
                    <div className="text-right">
                    <input type="submit" name="send_now" value="submit" class="intersted-btn-send btn-glasswarn text-uppercase"/>
                    </div>
                </form>               
               
            </div>
        </div>
    </div>
        </React.Fragment>
    )
}

class Apartments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLessOrMore:false
        }
        
    }
    onClickParagraph=()=>{
        const isCheck=!this.state.isLessOrMore;
        this.setState({
            isLessOrMore:isCheck
        })
    }
    render() {
        
        
        return (
            <React.Fragment>
                <section className="apartments aparments-padding">
                    <div className="row">
                       
                            <ol className="breadcrumb">
                                <li><a href=""><span className="inactive">Home</span></a></li>
                                <li><a href=""><span className="active">Apartments (9)</span></a></li>
                            </ol>

                            <div className="apartments__content-box">
                                <h3>Apartments</h3>
                                <span className="apartments__content-text"   style={ this.state.isLessOrMore ? { display:'block'} : {display : 'none'} }  >With the increasing demand for residential properties in Bangalore, the first idea that comes in mind is to choose an apartment over plots and villas. While most of the people prefer to rent out apartments initially, the good idea would be to look for apartments for sale.
                                    We at 40 squares, bring the best and cheap apartments for sale to take care of your residential needs. Equipped with all the modern facilities and amenities that one needs for a simplified life, buy flats located at the best locations in and around Bangalore through 40 squares.
                                    We understand that the lifestyles these days are bound with luxurious living and no matter what, you would always prefer the luxury apartments for sale over the traditional ones. Engraved with all the basic facilities like Gyms, club house, sports complexes, jogging track, advanced surveillance and security systems, 24 hours water and electricity, etc and many more, when you buy luxury apartments from the best and widest options listed on 40 squares, you will not have to look for any other residential property.
                                    We have many options to offer if you are looking for budget apartments for sale at the best locations like the Sarjapur Road in Bangalore. One of the areas that is witnessing huge growth these days, we have the best flats for sale from the top real estate groups renowned for their projects on a national level. Right from the two bedroom apartments to the ones that fall in the luxury homes category, no matter what property you put your money in, you get the best facilities in the township that will not just take care of your basic necessities but will help you in leading a highly luxurious life in Bangalore.
                                    To know more about the apartment options that we have brought for you, get in touch with us and buy apartments with best facilities and pocket friendly prices.</span>
                                <span className="apartments__content-text" style={ this.state.isLessOrMore ? { display:'none'} : {display : 'block'} } >
                                With the increasing demand for residential properties in Bangalore, the first idea that comes in mind is to choose an apartment over plots and villas. While most of the people prefer to rent ou...
                                </span>
                                <a className="apartments__content-more" style={ this.state.isLessOrMore ? { display:'none'} : {display : 'block'} }  onClick={this.onClickParagraph}>more</a>
                                <a className="apartments__content-more" style={ this.state.isLessOrMore ? { display:'block'} : {display : 'none'} }  onClick={this.onClickParagraph}>less</a>

                            </div>
                            <div className="apartments__display__large">
                            <div className="col-3-of-4 col-sm-12">
                                <ApartmentDetails />
                                <ApartmentDetails />
                                <ApartmentDetails />
                            </div>
                            <div className="col-1-of-4 col-sd-12">
                                <div className="appartments-left-side">
                                    <div className="contact-details">
                                        <h4>Contact us</h4>
                                        <p> <i class="fa fa-phone"></i> +91 78488 83344</p>
                                        <p><i class="fa fa-envelope"></i> info@40squares.com</p>
                                    </div>

                                    <div className="row ready-move-gallary">
                                        <div className="col-2 ">
                                            <img src={Side1} alt="image gallary" className="imagegallery " />
                                        </div>
                                        <div className="col-2 ">
                                            <img src={Side1} alt="image gallary" className="imagegallery" />
                                        </div>
                                        <div className="col-2 ">
                                            <img src={Side1} alt="image gallary" className="imagegallery" />
                                        </div>
                                        <div className="col-2 ">
                                            <img src={Side1} alt="image gallary" className="imagegallery" />
                                        </div>
                                        <a href="" className="btn-default">Luxury Projects</a>
                                    </div>

                                    <br />
                                    <br></br>
                                    <div className="">
                                        <div className="row ready-move-gallary1">
                                            <div className="col-2 ">
                                                <img src={Side1} alt="image gallary" className="imagegallery" />
                                            </div>
                                            <div className="col-2 ">
                                                <img src={Side1} alt="image gallary" className="imagegallery" />
                                            </div>
                                            <div className="col-2 ">
                                                <img src={Side1} alt="image gallary" className="imagegallery" />
                                            </div>
                                            <div className="col-2 ">
                                                {/* <img src={Side1} alt="image gallary" className="imagegallery"/> */}
                                            </div>
                                            <a href="" className="btn-default">Ready to move in</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="apartments__display__small-device">
                            <div className="new-row">
                                <div className="col-12">

                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Apartments;