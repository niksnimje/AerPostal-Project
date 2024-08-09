import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import './Css/Women.css';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdSwitch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Women() {
  const [womendata, setwomendata] = useState([]);
  const [page, setpage] = useState(1);
  const [order, setorder] = useState(null);
  const [selectcategory, setcategory] = useState(null);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();

  const WomensProduct = () => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('q');

    axios
      .get('http://localhost:3000/women-product', {
        params: {
          _page: page,
          _limit: 20,
          category: selectcategory || undefined,
          _sort: "price",
          _order: order,
          q: searchQuery || undefined,
          colors: selectedColors.length > 0 ? selectedColors.join(',') : undefined
        },
      })
      .then((res) => setwomendata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    WomensProduct();
  }, [page, order, selectcategory, selectedColors, location.search]);

  const handleFilterChange = (color, isChecked) => {
    setSelectedColors((prevColors) => {
      if (isChecked) {
        return [...prevColors, color];
      } else {
        return prevColors.filter((c) => c !== color);
      }
    });
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    const main = document.getElementById("main-product-row");
    const isPhone = window.innerWidth < 768; // Adjust based on your breakpoints

    if (!isPhone) {
      if (main.style.marginLeft === "0%") {
        main.style.marginLeft = "-20%";
        main.style.transition="all 0.3s ease-in"
      } else {
        main.style.marginLeft = "0%";
        main.style.transition="all 0.3s ease-in"

      }
    }
  };
  

  return (
    <>
      <div className="container-fluid ">
        <div className="row w-75 m-auto gap-0" >
          <div className="col-12 col-md-9 offset-md-3">
            <div className="row  pe-0 pe-sm-1 pe-md-2 pe-lg-5 justify-content-around align-content-center align-items-center flex-wrap " id='main-product-row' >
              <div className="filter-container flex-wrap mb-0">
              <div className="col-10 col-md-2 d-none d-sm-none d-md-none d-lg-block">
            {isSidebarVisible && <Sidebar onFilterChange={handleFilterChange} />}
            <button className='show-filter-btn' onClick={toggleSidebar}>
              {isSidebarVisible ? <IoMdClose /> :  <IoMdSwitch />}
              {isSidebarVisible ? 'Close Filter' :  'Show Filter'}
            </button>
          </div>
                <div>
                  <select
                    name=""
                    id=""
                    className="select-main"
                    onChange={(e) => setcategory(e.target.value)}
                  >
                    <option value="">Show Filters</option>
                    <option value="Featured">Featured</option>
                    <option value="Best">Best Seller</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>

                <div className="filter-buttons mt-4 mt-sm-0">
                  <button onClick={() => setorder("desc")}>High To Low</button>
                  <button onClick={() => setorder("asc")}>Low To High</button>
                </div>
              </div>

              {womendata.map((el) => (
                <div
                  key={el.id}
                  className="pt-5 col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-start"
                >
                  <Link to={`/description/${el.id}`}>
                    <img src={el.img} alt={el.title} className="img-fluid" />
                  </Link>

                  <div className="row justify-content-between align-content-center align-items-center">
                    <div className="col-10">
                      <p
                        className="mb-0"
                        style={{
                          color: "#CC1632",
                          fontWeight: "700",
                          fontSize: "12px",
                        }}
                      >
                        {el.mini}
                      </p>
                      <h6>{el.title}</h6>
                      <span style={{ fontWeight: "400" }}>${el.price}</span>{" "}
                      <span
                        style={{
                          fontWeight: "400",
                          color: "#A6A8A6",
                          fontSize: "14px",
                        }}
                      >
                        Comp.Vlaue ${el.comp}
                      </span>
                    </div>
                    <div className="col-2">
                      <HiOutlineShoppingBag className="hov-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-class text-center">
              <button
                className="btn btn-primary"
                disabled={page === 1}
                onClick={() => setpage(page - 1)}
              >
                Prev
              </button>
              <span>{page}</span>
              <button
                className="btn btn-primary"
                disabled={womendata.length < 10}
                onClick={() => setpage(page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
