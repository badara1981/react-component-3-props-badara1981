import React from "react";
import BootstrapCard from "./BootstrapCard";

// import the data object so we can use it when making the  <BootstrapCard/>
import data from "./data";

const app = () => {
  
 return (
<BootstrapCard
  image= {data.image}
  cardTitle = {data.cardTitle}
  cardDescription ={data.cardDescription}
  url= {data.button.url}
  label={data.button.label}
/>

 );
}

export default app;