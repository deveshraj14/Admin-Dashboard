// Navigation.js

import React from 'react';
import './Navigate.css'; // Import CSS for styling

const Navigation = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="navigation">
        
      <input
        type="text"
        placeholder="Search devices..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <h5 style={{ margin: '10px' }}>Admirra John</h5>
      <img src=".." class="img-thumbnail" alt=".."></img>
    </div>
    
    
  );
};

export default Navigation;
