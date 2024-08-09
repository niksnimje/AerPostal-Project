import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavbarCompo from '../Components/NavbarCompo';
import Fotter from '../Components/Fotter';
import Men from '../Page/Men';
import Jeans from '../Page/Jeans';
import AeroForAll from '../Page/AeroForAll';
import Clearance from '../Page/Clearance';
import Wishlist from '../Page/Wishlist';
import Locations from '../Page/Locations';
import Account from '../Page/Account';
import Cart from '../Page/Cart';
import Homepage from '../Page/Homepage';
import Women from '../Page/Women';
import Description from '../Components/Description';
import CreateAccount from '../Page/CreateAccount';




function AllRouters() {
  return (
    <div>
      <NavbarCompo  />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/description/:id" element={<Description />}  />
        <Route path="/men" element={<Men />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/aero-for-all" element={<AeroForAll />} />
        <Route path="/clearance" element={<Clearance />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/account" element={<Account />} />
        <Route path="/createacount" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> <br /><br /><br />
      <Fotter />
    </div>
  );
}




export default AllRouters;
