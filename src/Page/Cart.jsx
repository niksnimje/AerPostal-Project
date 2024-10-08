import React, { useEffect, useState } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { GiCardPickup } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuTimerReset } from "react-icons/lu";
import axios from 'axios';

function Cart() {

  const [amont,setamont]=useState(0)
  const [data,setdata]=useState([])

  const FetchPostData=()=>{
    axios.get('http://localhost:3000/Cart-data')
    .then((res)=>setdata(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    FetchPostData()
  },[])


  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/Cart-data/${id}`)
      .then(() => {
        alert("The Product Is remove...")
        setdata(data.filter(item => item.id !== id));
      })
      .catch((err) => console.log(err));
  }


  return (
    <>
    {data.map((el)=>(
        <div className="container">
        <h4>Shopping Bag (1)</h4>
        <hr />
        <div className="row">
          <div className=" col-12 col-sm-8 col-md-8 col-lg-8">
            <div className="row">
              <div className="col-3 col-12 col-sm-8 col-md-4 col-lg-3">
                  <img src={el.img} alt="" height={250} width={200} />
              </div>
              <div className="col-6 col-12 col-sm-6 col-md-6 col-lg-6 ps-5">
                <h6 >{el.title}</h6>
                <span><b>Price:- {el.price} </b></span> <span>Comp. Value: ${el.comp}</span> &nbsp;&nbsp;
                <button className='p-1' onClick={()=>setamont(amont-1)} disabled={amont===0}>-</button>
                <span>{amont}</span>
                <button className='p-1' onClick={()=>setamont(amont+1)} >+</button>
                <br /><br />
                <button className='btn btn-light'>
                  <TbTruckDelivery />Delivery
                </button> &nbsp;&nbsp;
                <button className='btn btn-light'>
                  <GiCardPickup />Free Pickup
                </button>
              </div>
              <div className="col-3">
                <Link style={{textDecoration:"none"}}><BiSolidEditAlt />Edit/Change Qut</Link>
                <br />
                <br />
                <Link style={{textDecoration:"none"}} onClick={()=>handleDelete(el.id)}><RiDeleteBin6Line />Delete</Link>
                <br />
                <br />
                <Link style={{textDecoration:"none"}}><LuTimerReset /> Save For Later</Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <form action="">
              <input type="text" />
              <h5>Order Summary</h5>
              <h6>Subtotal</h6>
              <h6>Shipping Economy Ground</h6>
              <h6>Shipping Discount	-$5.00</h6>
              <h6>Sales Tax</h6>
              <hr />
              <h5>Estimated Total
              </h5>
              <p>4 interest-free payments of $14.00 with Klarna. Learn More</p>
              <button>Checkout</button>
              <hr />
              <button>paypal</button>
              <button>Klarna</button>
            </form>
          </div>
        </div>
      </div>
    ))}
    {/* <div className="container">
      <h4>Shopping Bag (1)</h4>
      <hr />
      <div className="row">
        <div className=" col-12 col-sm-8 col-md-8 col-lg-8">
          <div className="row">
            <div className="col-3 col-12 col-sm-8 col-md-4 col-lg-3">
                <img src="https://m.media-amazon.com/images/I/51FICIl4KjL._SY741_.jpg" alt="" height={200} width={200} />
            </div>
            <div className="col-6 col-12 col-sm-6 col-md-6 col-lg-6">
              <h6>Pacific Palisades Club Crew Sweatshirt</h6>
              <span><b>Price:-___</b></span> <span>Comp. Value: $54.95</span> &nbsp;&nbsp;
              <button className='p-1' onClick={()=>setamont(amont-1)} disabled={amont===0}>-</button>
              <span>{amont}</span>
              <button className='p-1' onClick={()=>setamont(amont+1)} >+</button>
              <br /><br />
              <button className='btn btn-light'>
                <TbTruckDelivery />Delivery
              </button> &nbsp;&nbsp;
              <button className='btn btn-light'>
                <GiCardPickup />Free Pickup
              </button>
            </div>
            <div className="col-3">
              <Link style={{textDecoration:"none"}}><BiSolidEditAlt />Edit/Change Qut</Link>
              <br />
              <br />
              <Link style={{textDecoration:"none"}}><RiDeleteBin6Line />Delete</Link>
              <br />
              <br />
              <Link style={{textDecoration:"none"}}><LuTimerReset /> Save For Later</Link>
            </div>
          </div>
        </div>
        <div className="col-4">
          <form action="">
            <input type="text" />
            <h5>Order Summary</h5>
            <h6>Subtotal</h6>
            <h6>Shipping Economy Ground</h6>
            <h6>Shipping Discount	-$5.00</h6>
            <h6>Sales Tax</h6>
            <hr />
            <h5>Estimated Total
            </h5>
            <p>4 interest-free payments of $14.00 with Klarna. Learn More</p>
            <button>Checkout</button>
            <hr />
            <button>paypal</button>
            <button>Klarna</button>
          </form>
        </div>
      </div>
    </div> */}

    </>
  )
}

export default Cart
