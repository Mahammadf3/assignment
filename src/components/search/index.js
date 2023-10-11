import React, { useState} from "react";
import { CiSearch } from "react-icons/ci";
import Home from "../Home"


import "./index.css"

const Search=()=>{
    const [isHovered, setIsHovered] = useState(false);
    const [searchValue, setSearchValue] = useState("");
  

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const getSearchedData=(event)=>{
        setSearchValue(event.target.value);
    }



    
  
     


    return(
        <div className="seachContainer">

<h3 className="zevSearch">zev<span> <CiSearch/></span></h3> 
            <div className="search-input-container" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <input
              type="search"
              placeholder="Search"
              className="search-input"
              onChange={getSearchedData}
          
            
            />
            <button type="button"   className="search-icon">
              <CiSearch/>
              </button>
          </div>
          

          {isHovered && <div  className="hoverData">
            <div className="cardMargin">
              <h3>Latest Trends</h3>
              <div>
            <img src="https://i.pinimg.com/236x/a4/c7/13/a4c7132590e5b8dbba8bebcd1730aa9b.jpg" alt="prime-img"className="greatDeal"/>
            <h6>traditional outfit</h6>
            </div>
            <h3>Popular Suggeestions</h3>
            <p>stripped shirt dress</p>
            <p>solid tshirts</p>
            </div>
            </div>
        }
          <Home data4={searchValue}/>
           
        </div>
    )
}

export default Search








