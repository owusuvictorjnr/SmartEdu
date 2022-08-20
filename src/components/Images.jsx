import React from 'react';
import back5 from "../assets/Images/back5.jpg"
import SearchButton from './SearchButton';

export const Images = () =>{
  return (
    <div>
      <div className=" h-[50rem] w-full relative">

      <img src={back5} alt="me" className='w-full h-full object-cover absolute'/>

      {/* Text on image */}
      <div className='p-24 pl-40'>
      <h2 className="pt-20 capitalize absolute text-6xl text-slate-100 inline-block font-bold">
        we rank the best<br/> courses on the web
      </h2>
      <p className="mt-52 mix-blend-overlay text-slate-100 text-3xl font-bold">
        Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit.<br/>
        Dolorem, expedita iusto quas <br/>  porro eligendi repellendus.<br/>
      </p>
      <SearchButton/>
  
      </div>
      </div>
    </div>
  )
  
}

export default Images