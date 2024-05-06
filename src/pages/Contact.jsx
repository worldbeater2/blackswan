import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Contact = () => {
    return (
        <main><Navbar /> 
        
        <div className="hero min-h-[320px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1591800076009-a4a2c5582f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-55"></div>
  <div className="hero-content text-start text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-light tracking-wider font-navFont">Contact Us</h1>
    
  
    </div>
  </div>
</div>
<section className='flex p-5  mx-auto'>
<div className=' container w-96 h-96 ml-10 mt-10' >
<label className="input input-bordered flex items-center gap-2 mb-2" >
  Name
  <input type="text" className="grow" placeholder="Daisy" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>


</div>
 <div

          className="mx-auto text-center"
        >
          <div className="container font-navFont leading-tight w-[1000px] font-semibold text-black tracking-tighter text-6xl ">
            Discover Our Wide Range of Practice Areas and Expertise
          </div>
        </div>

</section>
        <Footer/>
        
        </main>
      )
    }
export default Contact