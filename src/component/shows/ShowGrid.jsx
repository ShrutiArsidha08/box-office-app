
import ShowCard from "./ShowCard";
import {useStarredShows} from'../../lib/useStarredShows';

const ShowGrid=({show})=>{
 const [starredShows,dispatchstarred]=useStarredShows()

 const onStarMeClick=(showId)=>{
    const isStarred=starredShows.includes(showId);

    if(isStarred){
        dispatchstarred({type:'UNSTAR',showId})
    }else{
        dispatchstarred({type:'STAR',showId})
    }
    };
 
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
        onStarMeClick={onStarMeClick}
        isStarred={starredShows.includes(data.show.id)}
        />
    ))}</div>
);
};
export default ShowGrid;