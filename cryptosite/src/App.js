import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomeTable from './components/HomeTable';
import Search from './components/Search';
import Trending from './components/Trending';
import { Route, Routes } from 'react-router-dom';
import Coin from './pages/Coin';

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [cryptoData, setCryptoData] = useState();
  const [searchTerms, setSearchTerms] = useState('');
  console.log(searchTerms)
  useEffect(() => {
    fetch(url).then(resp => resp.json()
    .then((data) => {setCryptoData(data);console.log(data)}
    
    ));
    
  }, [])
  

  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar sideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
        {openSideBar === true && <SideBar/>}
      </header>
      <main className='app-main'>
      <Routes>
        <Route path="/" element={<><Search setSearchTerms={setSearchTerms}/><HomeTable searchTerms={searchTerms} cryptoData={cryptoData}/><br/><Trending/></>}/>
        <Route path='/Coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
      </Routes>
      </main>
    </div>
  );
}

export default App;
