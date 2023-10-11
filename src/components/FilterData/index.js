
import "./index.css"



const FilterData=(props)=>{
    const{sortedData,FilterProducts}=props
    const{name,categoryId}=sortedData
 
    const getData=()=>{
        FilterProducts(categoryId)
    }
    return(
        <div className="BrandsContainer">
            <div className="checkContainer" onClick={getData}>
           <input type="checkbox" /> 
           <p>{name}</p>
           </div>

        </div>
    )
}

export default FilterData