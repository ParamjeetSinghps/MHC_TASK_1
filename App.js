// import logo from './logo.svg';
import './App.css';
import { Navbartab } from './Navbartab';
import { Presentation } from './Presentation';
import { Product } from './Product';
import { About } from './About';

function App() {
  return (
  <div className='Container'> 
    <header className='header'>
    <div className='navbar-tabs'>
       <Navbartab  option="Home"/>
       <Navbartab  option="About"/>
       <Navbartab option ="Products"/>
       <Navbartab option ="Services"/>
       <Navbartab option ="Contact"/>
    </div>
    </header>
    <main className='main-body'>
      <Presentation/>
    
    <h1 className='heading'>Products</h1>
    <div className='products'>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    <Product/>
    </div>
    <About/>
   
    </main>
    <footer className='footer'>
      <p>Copyright © 2024 Urban Edge. All rights reserved.</p>
    </footer>
  </ div>
  );
}

export default App;
