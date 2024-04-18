import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Expertise = () => {
    return (
        <main><Navbar /> 
        <div className="hero min-h-[320px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1591800076009-a4a2c5582f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-55"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-light tracking-wider font-navFont">Expertise</h1>
    
  
    </div>
  </div>
</div>
        <Footer/>
        
        </main>
      )
    }

export default Expertise;