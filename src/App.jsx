import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";


const favSeries = "netflix";

const Favs =() => { 
   if(favSeries === "netflix"){
      return <Netflix />
} else{
   return <Amazon />
}
};

const App = () => {
   return(
      <>
         <h1 className="heading_style"> Top 5 NETFLIX Series </h1>
          <Favs />  
      </>
   )
};

export default App;