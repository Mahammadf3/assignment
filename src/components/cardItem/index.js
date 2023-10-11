import { BsHeart} from "react-icons/bs";
import{useState} from "react"
import "./index.css"
const CardItems=(props)=>{
const {eachData,fovouriteFilter,isActive}=props
const{id,
    image,
    price,
    rating,
    title}=eachData
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    const onFavorate=()=>{
        fovouriteFilter(isActive)
    }
    const favColor=isActive ? "like":"heart"

return(
    <div className="firstCard" onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      
    <img src={image} alt={`${id}`} className="dressImahge"/>
    <div className="hi">
    <h6>{title}</h6>
    <div className="ratingContainer">
        <p>{`Rs.${price}`}</p>
        <p className={favColor} onClick={onFavorate} ><BsHeart /></p>
        </div>
        {isHovered ? <p className="productColor">view Products</p>:
      
    <p><img src="https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png" alt="rating" className="stars"/>{`-${rating}`}</p>

  }
    </div>
   
    </div>
)
}

export default CardItems