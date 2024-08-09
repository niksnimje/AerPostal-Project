import React from 'react';

function Sidebar({ onFilterChange }) {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    onFilterChange(value, checked); // Pass the color and checked status to parent component
  };

  return (
    <div className="sidebar d-none d-sm-none d-md-block d-lg-block">
      <div className="sidebar-section">
        <h6>Category</h6>
        <ul>
          <li><input type="checkbox" value="Top" onChange={handleCheckboxChange} /> Top</li>
          <li><input type="checkbox" value="Bottoms" onChange={handleCheckboxChange} /> Bottoms</li>
          <li><input type="checkbox" value="Matching Sets" onChange={handleCheckboxChange} /> Matching Sets</li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h6>Color</h6>
        <ul className="color-list">
          <li className="color-option"><input type="checkbox" value="Black" onChange={handleCheckboxChange} /> <span className="color-box black"></span> Black</li>
          <li className="color-option"><input type="checkbox" value="Blue" onChange={handleCheckboxChange} /> <span className="color-box blue"></span> Blue</li>
          <li className="color-option"><input type="checkbox" value="Brown" onChange={handleCheckboxChange} /> <span className="color-box brown"></span> Brown</li>
          <li className="color-option"><input type="checkbox" value="Green" onChange={handleCheckboxChange} /> <span className="color-box green"></span> Green</li>
          <li className="color-option"><input type="checkbox" value="White" onChange={handleCheckboxChange} /> <span className="color-box white"></span> White</li>
          
        </ul>
       
      </div>
    </div>
  );
}

export default Sidebar;
