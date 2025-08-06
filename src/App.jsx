import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const BASEURL=import.meta.ev.BASE_URL;
    return (
      <>
        <header>
          <div className='logo'> Grid Demo </div>
        </header>
        <section>
          <div className='card'>
            <img src='/prac5/1.jpeg' alt=''/>
            <label>PROJECT 01 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/2.jpeg' alt=''/>
            <label>PROJECT 02 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/3.jpeg' alt=''/>
            <label>PROJECT 03 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/4.jpeg' alt=''/>
            <label>PROJECT 04 </label> 
          </div>
          <div className='card'>
            <img src='prac5/5.jpeg' alt=''/>
            <label>PROJECT 05 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/6.jpeg' alt=''/>
            <label>PROJECT 06 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/7.jpeg' alt=''/>
            <label>PROJECT 07 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/8.jpeg' alt=''/>
            <label>PROJECT 08 </label> 
          </div>
          <div className='card'>
            <img src='/prac5/9.jpeg' alt=''/>
            <label>PROJECT 09 </label> 
          </div>
        </section>
        <footer> Copyright @ 2025 . All rights Reserved </footer>
      </>
    );
  }
}

export default App;
