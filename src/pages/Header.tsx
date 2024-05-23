import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="links">
                        <img src="/images/logo.png" alt="" />
                    <div className="buttons">
                        <a href="#">Business areas</a>
                        <a href="#">Featured images</a>
                        <a href="#">Gear cage</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="text">
                    <h2>Photographer & Filmmaker</h2>
                    <h1>Aperture Studios</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
            </div>

            <div className="icons">
                <div className="single-icon">
                    <img src="/images/icon.png" alt="icon" />
                    <p>1/2000s</p>
                </div>
                <div className="single-icon">
                    <img src="/images/icon1.png" alt="icon" />
                    <p>f/11</p>
                </div>
                <div className="single-icon">
                    <img src="/images/icon2.png" alt="icon" />
                    <p>100</p>
                </div>
                <div className="single-icon">
                    <img src="/images/icon3.png" alt="icon" />
                    <p>Iceland</p>
                </div>
            </div>
        </header >
    );
}

export default Header;