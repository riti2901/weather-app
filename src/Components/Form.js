import React from 'react'

const Form = props => {
  return (
    <div className="container p-4 mt-5 flex justify-center items-center">
    <div className="error">
     {props.error?error():null}
    </div>
    <form onSubmit={props.loadweather}>
      <div className="row">
          <span className="col-md-3">
              <input type="text" className='text-white form-control w-80 h-10 text-center border-b-4 border-white focus:outline-none bg-transparent uppercase' name='city' autoComplete='off' placeholder='City' />
          </span>
          <span className="col-md-3 mx-8">
          <input type="text" className=' text-white form-control w-80 h-10 text-center border-b-4 border-white focus:outline-none bg-transparent uppercase' name='country' autoComplete='off' placeholder='Country'/>
          </span>
          <span className="col-md-3 mx-6">
              <button className='btn btn-warning bg-amber-400 w-40 h-10 rounded -md font-semibold text-xl'>Get Weather</button>
          </span>
      </div>
    </form>
    </div>
  )
}

function error(){
    return(
<div className="alert mx-5" role="alert">
    Please enter city and country
</div>
    );
}
export default Form
