import React,{useEffect,useState}   from 'react';
import { useParams } from 'react-router-dom'
import Book from './card_detail/Book.jsx';
export const Home = () => {
    const [detail , show] = useState([]);
    let { id } = useParams(); 
 
 useEffect(() => {
    const Api = async() => {
       
        const url = `https://api.tvmaze.com/search/shows?q=all`;
       const check = await fetch(url);
       const res = await check.json();  
       const detailObj = res.filter((product) => {
          return  product.show.id == id });    
    //    console.log('detailobj',detailObj);  
            show(detailObj)
  }  
        Api();

    },[id]) 
   
    return (<>
    {detail.map((data)=>{
        return (
           <Book  img={data.show.image.medium} {...data} />    
        )
    }) }
    </> 
    )
}