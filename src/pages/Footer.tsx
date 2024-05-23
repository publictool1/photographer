import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-first_block content">
                <div className="left-side">
                    <div className="logo">
                        <img src="/images/logo.png" alt="logo" />
                        <p>Photographers & videographers capturing the world around us.</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="first-block">
                        <p>Business areas</p>
                        <a href="#">Product Photography</a>
                        <a href="#">Architecture Photography</a>
                        <a href="#">Drone Photography</a>
                        <a href="#">Wildlife Photography</a>
                    </div>
                    <div className="second-block">
                        <p>Pages</p>
                        <a href="#">Gear cage</a>
                        <a href="#">Featured images</a>
                        <a href="#">Contact</a>
                        <a href="#">Style guide</a>
                        <a href="#">Instructions</a>
                        <a href="#">Changelog</a>
                    </div>
                </div>
            </div>
            <div className="footer-second_block content">
                <div className="left-side">
                    <div className="logo">
                        <h3>Subscribe to our newsletter</h3>
                        <p>Read about all the things we do.</p>
                    </div>
                </div>
                <div className="right-side">
                    <label htmlFor="">
                        <input type="text" placeholder='Send' />
                        <button>Click</button>
                    </label>
                </div>
            </div>
            <div className="footer-third_block content">
                <div className="left-side">
                    <div className="logo">
                        <p>© Aperture Photography, Inc. All rights reserved. Licensing</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="links">
                        <img src="/images/link.png" alt="icon" />
                        <img src="/images/link1.png" alt="icon" />
                        <img src="/images/link2.png" alt="icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;