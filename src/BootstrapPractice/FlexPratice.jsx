function FlexPratice() {

    return (
       <div className='d-flex flex-row flex-wrap p-3 justify-content-between w-100 mb-3  align-items-center border border-success'> 
      <h1 className="ms-auto mx-2 text-primary flex-grow-1">Welcome</h1>
      <h1 className="mx-2 text-danger">Hello world</h1>
  
      <button className='btn px-2 m-3 btn-primary' >Start</button>
      <button className='btn px-2 btn-warning' >Log in</button>
      </div>
    )
  }
  
  export default FlexPratice;