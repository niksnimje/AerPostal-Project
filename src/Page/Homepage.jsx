import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import './App.css'


function Homepage() {
  return (
    <>
      {/* promo */}
      <div className="promo-main" style={{ overflow: 'hidden', height: "100px" }}>
      <div className="row d-flex flex-row justify-content-around overflow-auto overflow-y-hidden" style={{ flexWrap: "nowrap", gap: "20px" }}>
        
        <div className="col-10 col-md-4 col-lg-3 bg-black text-light pb-5 mb-3 ms-4 d-flex align-items-center" style={{ borderRadius: ".5vw" }}>
          <div className="row flex-row justify-content-between align-content-center align-items-center">
            <div className="col-6">
              <h5>SHORTS</h5>
              <h5>$12 & UP</h5>
            </div>
            <div className="col-6 bg-light p-3 text-center" style={{ borderRadius: "20px" }}>
              <Link to="/women" className="">Women</Link>
              <Link to="/men" className='p-3'>Men</Link>
            </div>
          </div>
        </div>
        
        <div className="col-10 col-md-4 col-lg-3 bg-black text-light pb-3 mb-3 d-flex align-items-center" style={{ borderRadius: ".5vw" }}>
          <div className="row justify-content-between flex-row align-content-center align-items-center">
            <div className="col-6">
              <h5>UP TO 50% OFF</h5>
              <h5>NEW ARRIVALS</h5>
            </div>
            <div className="col-6 bg-light p-3 text-center" style={{ borderRadius: "20px" }}>
              <Link  to="/women" className="p-2">Women</Link>
              <Link to="/men" className="p-2">Men</Link>
            </div>
          </div>
        </div>
        
        <div className="col-10 col-md-4 col-lg-3 bg-black text-light p-3 mb-3 d-flex align-items-center" style={{ borderRadius: ".5vw" }}>
          <div className="row justify-content-between flex-row align-content-center align-items-center">
            <div className="col-6">
              <h5>NEW TO CLEARANCE</h5>
              <h5>$5.99 & UP</h5>
            </div>
            <div className="col-6 bg-light p-3 text-center" style={{ borderRadius: "20px" }}>
              <Link  to="/women" className="p-2">Women</Link>
              <Link to="/men" className="p-2">Men</Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>


      <br /><br />

{/* Yellow Img */}

      <div className="container-fluid p-0">
        <div className=" yellow-bg-img " >
         <div className='d-flex flex-column justify-content-center align-items-center h-100' >
          <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw956e2e28/images/2024/Home/071024/A_SPOT_BTS%20DEALS_DT.png"   className='yellow-main-img'    alt="" /> <br />
          <p> 
          Stock up for less than your favorite latte. 
          </p>
          
          </div>
         </div>
      </div>

    <br />


    {/* first-img */}

        <Link to={"/jeans"}  style={{textDecoration:"none"}}  >
        <div className="container-fluid Jeans-bg p-0 d-flex justify-content-evenly  align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
          
          
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 p-0 im-1 mt-5">
            
          </div>
           <div className="col-12 col-sm-3 col-md-3 col-lg-3 im-2 bottom-0 position-relative img-fluid d-none d-sm-none d-md-none d-lg-block">
           <div className="frist-image-content text-light text-center" style={{marginTop:"90%"}}> <br /><br />
            <h1>
            + FREE SHIPPING! </h1>
            <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
            </div>
           </div>
           <div className="col-12 col-sm-3 col-md-3 col-lg-3 d-none d-sm-none d-md-none d-lg-block im-3 ">

           </div>
      </div>
        </Link>

    <br />
    <br />
    <br /> 
    {/* kitty-img */}


        <Link to={"/women"}  style={{textDecoration:"none"}}>
        <div className="container-fluid kitty-bg p-0 d-flex " style={{justifyContent:"center",alignContent:"center"}}>
           <div className="col-12 col-sm-8 col-md-8 col-lg-6  im-4  text-center" >
            <div className="im-4-con" style={{marginTop:"30%"}}>
              <h4 className='text-light d-none d-sm-none d-md-block d-lg-block'>
              ONE-OF-A-KIND CUTENESS, GET YOURS NOW!</h4>
              <div className="btn text-black ps-5 pe-5" style={{backgroundColor:"white", borderRadius:"20px"}}>
                Shop Now
              </div>
            </div>
           </div>
        </div>
        </Link>

        <br />
    <br /> 
    {/* Aero-img */}


        <Link to={"/women"}  style={{textDecoration:"none"}}>
        <div className="container-fluid aero-bg p-0 d-flex " style={{justifyContent:"center",alignContent:"center"}}>
          <div className="col-1 col-sm-4 col-md-4 col-lg-6"></div>
           <div className="col-10 col-sm-8 col-md-8 col-lg-4 im-5 img-fluid text-center" >
            <h2></h2>
           </div>
        </div>
        </Link>
      <br /><br />

    
      {/* blue Image */}
      <Link to={"/women"} style={{textDecoration:"none"}}>
      <div className="container-fluid blue-img ">
        <div className="row g-3 g-sm-0 text-center d-flex align-items-center pt-4 align-content-center flex-column flex-sm-row flex-md-row flex-lg-row">
          <div className="col-3"></div>
          <div className="col-12 col-sm-3 col-md-3">
            <h1  style={{color:"#f7d309",fontWeight:"700"}}>
            A SHORT STORY</h1>
          </div>
          <div className="col-12 col-sm-3 col-md-3 ">
            <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw25fa6242/images/2024/Home/072424/Shorts%20Badge-min.png" width={200} alt="" />
          </div>
          <div className="col-12 col-md-3">
          <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
          </div>
        </div>
      </div>
      </Link>

    <br />

      {/* Uniform Image */}

      <Link to={"/women"}>
      <div className="container-fluid uniform-img ">

      </div>
      </Link>

      <br />
      {/* smile Image 2*/}
      <Link to={"/women"}>
      <div className="container-fluid smile-img ">
        <div className="row g-3 g-sm-0 text-center d-flex align-items-center align-content-center flex-column flex-sm-row flex-md-row flex-lg-row">
          <div className="col-3"></div>
          <div className="col-12 col-sm-5 col-lg-5 im-6 ">
            
          </div>
          
          <div className="col-12  col-md-3">
          <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
          </div>
        </div>
      </div>
      </Link>





  



    </>
  );
}


export default Homepage;
