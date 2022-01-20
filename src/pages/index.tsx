import React, { FormEvent } from 'react';
import '../styles/header.scss'
import {useHamb} from '../hooks/useHamg'
import {Section} from '../components/section'


function Index() {
  const [val, abrir] = useHamb()

  window.onresize = (e) =>{
   if(window.innerWidth >= 600 && val){
     abrir()
   }
  }

  

  return (
    <div className="App">
      {val && <div onClick={() => abrir()} className="bgRemoveMenu"></div>}
      <header className='header'>
        <nav>
          <div className='logo' />
          <div className="links">
            <a href="/#" className='linkInicio'  onClick={(e: FormEvent)=>{
              e.preventDefault();
            }} >
              INICIO
              </a>
            <a href="/#" onClick={(e: FormEvent)=>{
              e.preventDefault()
            }} >
              PROJETOS
              </a>
            <a href="/#" onClick={(e: FormEvent)=>{
              e.preventDefault()
            }} >
              CONTATO
              </a>
          </div>
          <div onClick={(e: FormEvent) => {
        
        abrir()
          
          }} className={`hamburger ${val ? 'activeHamb' : ''}`}>
            <div className="line oneLine"></div>
            <div className="line twoLine"></div>
            <div className="line treeLine"></div>
          </div>
          <div className={`menu ${val ? 'activeMenu' : ''}`}>
            <h4 className="li tiny">INICIO</h4>
            <h4 className="li">PROJETOS</h4>
            <h4 className="li">CONTATO</h4>
          </div>
        </nav>
        
        <div className="ball one">

        </div>

        <div className="ball two">
          
          </div>

          <div className="ball tree">
          
        </div>

          <div className="meInfo">
            <h1>Matheus Bacochina</h1>
            <h3>Front End</h3>
          </div>

      </header>

         <Section green={true} />

       
    </div>
  
  );
}

export default Index;
