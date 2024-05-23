import './HomeBlockSec.scss'

function HomeBlockSec() {
    return (
        <div className='container-second'> 
            <div className="text">
                <h3>Sunset at Mount Fuji</h3>
                <p>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
            </div>
            <div className="links">
                <div className="single-link">
                    <img src="/images/icon.png" alt="icon" />
                    <p>1''</p>
                </div>
                <div className="single-link">
                    <img src="/images/icon1.png" alt="icon" />
                    <p>f/16</p>
                </div>
                <div className="single-link">
                    <img src="/images/icon2.png" alt="icon" />
                    <p>400</p>
                </div>
                <div className="single-link">
                    <img src="/images/icon3.png" alt="icon" />
                    <p>Japan</p>
                </div>
            </div>
        </div>
    );
}

export default HomeBlockSec;