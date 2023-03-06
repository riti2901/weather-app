import React from 'react'

const Weathercomp = props => {
  return (
    <div className="container">
    <div className="cards">
    <h1 className="text-5xl text-center font-semibold mt-10 text-white">{props.city}</h1>
    <div className="icon text-center mt-10">
    <i className={`wi ${props.weatherIcon} text-8xl font-boldest text-white` }></i>
    </div>
  
    {props.temp_celsius?(<h1 className='text-6xl mt-10 text-center text-white'>{props.temp_celsius}&deg;</h1>):null}

      {minmaxTemp(props.temp_min,props.temp_max)}
      <h4 className="py-3 text-center mt-2 text-2xl font-semibold text-white">{props.description}</h4>
      </div>
        </div>
  );
};
  function minmaxTemp(min,max){
    if(min&&max){
      return (
        <h3 className='text-center text-3xl mt-5 font-semibold text-white'>
            <span className='px-4'>{min}&deg;</span>
            <span className='px-4'>{max}&deg;</span>
        </h3>
          );
    }
    
  }

export default Weathercomp;
 