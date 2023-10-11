
import "./index.css"



const FilterData2=(props)=>{
    const{priceData,FilterProducts2}=props
    
    const {displayText, optionId}=priceData

    const priceSort=()=>{
        FilterProducts2( optionId)
    }
   
    return(
        <div className="BrandsContainer1">
            <div className="checkContainer1" onClick={priceSort}>
           <input type="checkbox"/> 
           <p>{displayText}</p>
           </div>

        </div>
    )
}

export default FilterData2