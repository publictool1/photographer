import './HomeBlockThird.scss'

function HomeBlockThird() {
    return (
        <div className='container-tree'>
            <div className="three-block">
                <div className="left-block">
                    <div className="text-block">
                        <h3>The Gear cage</h3>
                        <h1>The tools that we use.</h1>
                        <p>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                        <div className='button'>
                            <div className='circle'></div>
                            <p>Check it out</p>
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <img className='bg-image' src="/images/block.png" alt="image" />

                    <div className="links">
                        <div className="single-link">
                            <img src="/images/icon.png" alt="icon" />
                            <p>0,8''</p>
                        </div>
                        <div className="single-link">
                            <img src="/images/icon1.png" alt="icon" />
                            <p>f/5,6</p>
                        </div>
                        <div className="single-link">
                            <img src="/images/icon2.png" alt="icon" />
                            <p>100</p>
                        </div>
                        <div className="single-link">
                            <img src="/images/icon3.png" alt="icon" />
                            <p>Sweden</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBlockThird;