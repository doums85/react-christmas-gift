import { Link } from 'react-router-dom';
import './Footer.scss';
import 'boxicons';

const Footer = ({changeTheme}) => {
    return (
        <footer className='footer section'>
            <div className="footer__container bd-container bd-grid">
                <div data-aos="fade-down" data-aos-delay="1500" className="footer__content">
                    <h3 className="footer__title">
                        <a to='/'>Christmas Gift</a>
                    </h3>
                    <p className="footer__description">I sent a gift and it gives <br /> hapinness</p>
                </div>

                <div data-aos="fade-down" data-aos-delay="1500" className="footer__content">
                    <h3 className="footer__title">Our Services</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Pricing</a></li>
                        <li><a href="#" className="footer__link">Discounts</a></li>
                        <li><a href="#" className="footer__link">Shipping mode</a></li>
                    </ul>
                </div>

                <div data-aos="fade-down" data-aos-delay="1500" data-aos="fade-down" data-aos-delay="1500" className="footer__content">
                    <h3 className="footer__title">Our Company</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Blog</a></li>
                        <li><a href="#" className="footer__link">About us</a></li>
                        <li><a href="#" className="footer__link">Our mision</a></li>
                    </ul>
                </div>

                <div data-aos="fade-down" data-aos-delay="1500" className="footer__content">
                    <h3 className="footer__title">Social</h3>
                    <a href="#" className="footer__social">
                        <box-icon color={changeTheme ? "#F3F1F1" : 'black' } name='facebook-circle' type='logo' ></box-icon>
                    </a>

                    <a href="#" className="footer__social">
                        <box-icon color={changeTheme ? "#F3F1F1" : 'black' } name='twitter' type='logo' ></box-icon>
                    </a>

                    <a href="#" className="footer__social">
                        <box-icon color={changeTheme ? "#F3F1F1" : 'black' } name='instagram-alt' type='logo' ></box-icon>
                    </a>
                </div>

            <p className="footer__copy">
                &#169; 2021 <a className="footer__link" href="https://www.linkedin.com/in/mamadou-faye-seck">Seck Mamadou Faye</a> 
            </p>
            </div>
        </footer>
    )
}

export default Footer
