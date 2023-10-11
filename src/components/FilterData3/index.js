
import "./index.css"



const FilterData3=(props)=>{
    const{ratingData,FilterProducts3}=props
    
    const {imageUrl,ratingId}=ratingData

    const onRating=()=>{
        FilterProducts3(ratingId)
    }
    
   
    return(
        <div className="BrandsContainer2">
            <div className="checkContainer2" onClick={onRating}>
           <input type="checkbox"/> 
           <img src={imageUrl} alt="rating" className="startRating"/>
           </div>

        </div>
    )
}

export default FilterData3