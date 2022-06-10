import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Netflix = () => {
    return(
        <Card 
      key={Sdata[1].id}
      imgsrc={Sdata[1].imgsrc}
      tittle={Sdata[1].tittle}
      sname= {Sdata[1].sname}
      href=  {Sdata[1].href}
      />

    )
};

export default Netflix;