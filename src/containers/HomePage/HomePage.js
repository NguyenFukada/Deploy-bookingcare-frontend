import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/medicalFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import Handbook from './Section/Handbook';
import './HomePage.scss';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {
    // handleAfterChange = () => {

    // }
    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // afterChange: this.handleAfterChange
        };
        return (
            <div>
                <HomeHeader isShowBanner={true}/>
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <OutstandingDoctor settings={settings} />
                <Handbook settings={settings} />
                <About />
                <HomeFooter />
                <div style={{ height: '300px' }}></div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
