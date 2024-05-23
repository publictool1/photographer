import HomeBlockFirst from '../components/HomeBlockFirst';
import HomeBlockFive from '../components/HomeBlockFive';
import HomeBlockFour from '../components/HomeBlockFour';
import HomeBlockSec from '../components/HomeBlockSec';
import HomeBlockSeven from '../components/HomeBlockSeven';
import HomeBlockSix from '../components/HomeBlockSix';
import HomeBlockThird from '../components/HomeBlockThird';
import Footer from './Footer';
import './Home.scss'

function Home() {
    return (
        <>
         <HomeBlockFirst /> 
         <HomeBlockSec />
         <HomeBlockThird />
         <HomeBlockFour />
         <HomeBlockFive />
         <HomeBlockSix />
         <HomeBlockSeven />
         <Footer />
        </>
    );
}

export default Home;