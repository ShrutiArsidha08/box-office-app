// import React from 'react';
import ShowCard from "./ShowCard";

const ShowGrid=({show})=>{
    console.log(show);
    return(
    <div>{
    show.map (data =>(
        <ShowCard
         key={data.show.id} 
         id={data.show.id}
         name={data.show.name}
         image={data.show.image?
         data.show.image.medium:'/not-found-image.png'
        }
        summary={data.show.summary}
        
        />
    ))}</div>
);
};
export default ShowGrid;