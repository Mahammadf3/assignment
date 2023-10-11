import {useEffect,useState } from "react"
import "./index.css"

import { Oval } from 'react-loader-spinner';

import FilterData from "../FilterData"

import CardItems from "../cardItem"
import FilterData2 from "../FilterData2"
import FilterData3 from "../FilterData3"

const categoryOptions = [
    {
      name: 'Mango',
      categoryId: '1',
    },
    {
      name: 'H&M',
      categoryId: '2',
    },
    {
      name: 'Nike',
      categoryId: '3',
    },
    {
      name: 'Grocery',
      categoryId: '4',
    },
    {
      name: 'Toys',
      categoryId: '5',
    },
  ]
  const sortbyOptions = [
    {
      optionId: 'PRICE_HIGH',
      displayText: '70000 to low',
    },
    {
      optionId: 'PRICE_LOW',
      displayText: 'under 500 to High',
    },
  ]

  const ratingsList = [
    {
      ratingId: '4',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
    },
    {
      ratingId: '3',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
    },
    {
      ratingId: '2',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
    },
    {
      ratingId: '1',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
    },
  ]
  
const apiState={
    initial:"initial",
    loading:"load",
    success:"success",
}

const Home =(props)=>{
    const [userInput,setInput]=useState({apiResponse:apiState.initial,data2:null,isActive:false})
    const [listData,setList]=useState("")
    const [brand,setBrand]=useState(categoryOptions[0].categoryId)
    const[price,setPrice]=useState(sortbyOptions[0].optionId)
    const[rating,setRating]=useState(ratingsList[1].ratingId)
   
    const{data4}=props
  


useEffect(()=>{
    setList(data4)
    const fetchApi=async()=>{
        setInput({apiResponse:apiState.loading,data2:null})
        const url=`https://apis.ccbp.in/products?category=${brand}&sort_by=${price}&rating=${rating}`
        const options = {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
            },
            method: 'GET',
          }

        const response=await fetch(url,options);
        const data=await response.json();
        if(response.ok===true){
            setInput(prevUserInput=>({...prevUserInput,data2:data,apiResponse:apiState.success}))
           
        }
        
     
    }

    fetchApi()
},[data4,brand,price,rating])


const FilterProducts=(id)=>{
    setBrand(id)
}

const FilterProducts2=(id)=>{
    setPrice(id)
}
const FilterProducts3=(id)=>{
    setRating(id)
}

const fovouriteFilter = (value) => {
  setInput((prevUserInput) => ({
    ...prevUserInput,isActive:!value
   
  }));
};





const loadView=()=>{
    return(
      <div>
      <Oval color="#00BFFF" height={50} width={50} />
    </div>
    )
}


const success1=()=>{
    const fetchedData=userInput.data2.products.map(eachItem=>({
        id:eachItem.id,
        image:eachItem.image_url,
        price:eachItem.price,
        rating:eachItem.rating,
        title:eachItem.title,
       
      
    
    }))
    const filterData=listData
    ? fetchedData.filter((eachItem) =>
        eachItem.title.toLowerCase().includes(listData.toLowerCase())
      )
    : fetchedData;

    return(
        <div className="searchContaine">
            {filterData.map(eachItem=>
                
                <CardItems eachData={eachItem} key={eachItem.id} isActive={userInput.isActive} fovouriteFilter={fovouriteFilter}/>
                )}
        </div>
    )
}

const products=()=>{
    const{apiResponse}=userInput
    switch(apiResponse){
        case apiState.loading:
            return loadView()
        case apiState.success:
            return success1()
        default:
            return null
    }
}

return(
    <div className="searchContainer">
        <div className="smallContainer">
        <h1>Search Results</h1>
        <div className="leftContainer">
            <h3>BRAND</h3>
            {categoryOptions.map(eachItem=>
                <FilterData sortedData={eachItem} key={eachItem.categoryId}  FilterProducts={ FilterProducts}/>
            )}
                 <hr className="horiZontalLine"/>
              <h3>PRICE RANGE</h3> 
              {sortbyOptions.map(eachItem=>
               <FilterData2 priceData={eachItem} key={eachItem.optionId} FilterProducts2={FilterProducts2}/>
                )}  
                  <hr className="horiZontalLine"/>
                  <h3>RATING</h3>
                  {ratingsList.map(eachItem=>
                    <FilterData3 ratingData={eachItem} key={eachItem.ratingId} FilterProducts3={FilterProducts3}/>
                    )}
        </div>
   
        </div>
        <div className="productsCard">
        {products()}
        </div>
    </div>
)
}

export default Home


