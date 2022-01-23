import React , { useState , useEffect} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './card/Card.jsx';
import './App.css'
import Header from "./card/Header";


const App = () => {
    const [num , setnum] = useState([]);
    const Api = async() => {
         const url = `https://api.tvmaze.com/search/shows?q=all`;
        const res = await fetch(url);
        const ress = await res.json();       
        setnum(ress);
  

    }  
 useEffect(() => {
        Api();

    },[])
return (<>
        <Header />
    <div className="d1">

    {num.map((data)=>{
      
        return(
        
            <Card key={data.show.id} data={data}  img={data.show.image.medium} title={data.show.name}  />
        )
        
    })}
</div>
      </>
    )
};

export default App;