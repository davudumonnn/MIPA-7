import './App.css';
import Navigation from './components/Navigation.js';
import Hero from './components/Hero.js'
import Page from './components/Page.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Navigation/>
      <div id='awal' className='carousel slide w-50 align-items-center mt-2' style={{ height:'100vh',margin:'auto'}}>
        <Hero/>
      </div>
      <div id='tengah' classname='ml-3'>
        <Page/>
      </div>
      <div className='bottom'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
