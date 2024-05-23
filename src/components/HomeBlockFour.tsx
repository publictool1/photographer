import './HomeBlockSec.scss'

function HomeBlockFour() {
    return (
        <div className='container-four'> 
            <div className="text">
                <h3>Sunset at Mount Fuji</h3>
                <p>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
            </div>
            <div className="links">
                <div className="single-link">
                    <img src="/images/icon.png" alt="icon" />
                    <p>1/400s</p>
                </div>
                <div className="single-link">
                    <img src="/images/icon1.png" alt="icon" />
                    <p>f/3,5</p>
                </div>
                <div className="single-link">
                    <img src="/images/icon2.png" alt="icon" />
                    <p>100</p>
                </div>
                <div className="single-link">
                    <img src="/images/icon3.png" alt="icon" />
                    <p className='costa'>Costa Rica</p>
                </div>
            </div>
        </div>
    );
}

export default HomeBlockFour;