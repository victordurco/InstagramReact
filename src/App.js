import Navbar from './components/body/Navbar';
import Corpo from './components/body/Corpo';
import FundoMobile from './components/mobile/FundoMobile';

export default function App(){
    return(
        <div>
            <Navbar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    );
}