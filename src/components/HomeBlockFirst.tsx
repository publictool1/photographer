import './HomeBlockFirst.scss'

function HomeBlockFirst() {
    return (
        <div className='container-first'>
            <div className="content">
                <h1>What we do.</h1>
                <p>The areas that we're specialized in.</p>

                <div className="cards">
                    <div className="single-card">
                        <img src="/images/block2.png" alt="image" />

                        <div className="text-card">
                            <h3>Product Photography</h3>
                            <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>

                            <div className='button'>
                                <div className='circle'></div>
                                <p>Read more</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-card">
                        <img src="/images/block1.png" alt="image" />

                        <div className="text-card">
                            <h3>Product Photography</h3>
                            <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>

                            <div className='button'>
                                <div className='circle'></div>
                                <p>Read more</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-card">
                        <img src="/images/block4.png" alt="image" />

                        <div className="text-card">
                            <h3>Product Photography</h3>
                            <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>

                            <div className='button'>
                                <div className='circle'></div>
                                <p>Read more</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-card">
                        <img src="/images/block3.png" alt="image" />

                        <div className="text-card">
                            <h3>Product Photography</h3>
                            <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>

                            <div className='button'>
                                <div className='circle'></div>
                                <p>Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBlockFirst;