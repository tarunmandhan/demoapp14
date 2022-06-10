import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const Amazon = () => {
    return(
        <Card 
        key={Sdata[5].id}
        imgsrc={Sdata[5].imgsrc}
        tittle={Sdata[5].tittle}
        sname= {Sdata[5].sname}
        href=  {Sdata[5].href}
        />
    )
};

export default Amazon;