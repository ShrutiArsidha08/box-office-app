import{useQuery} from '@tanstack/react-query';
import{getShowsByIds} from '../api/tvmaze'
import{useStarredShows} from '../lib/useStarredShows';
import ShowGrid from '../component/shows/ShowGrid';

const Starred = () => {
  const [{starredShowsIds}]=useStarredShows();

  const { data:starredShows,error:starredShowsError } = useQuery({
    queryKey: ['starred',starredShowsIds],
    queryFn: () => 
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show=>({show}))),
    
    refetchOnwindowFocus: false,
  });

  if(!starredShows || starredShows.length === 0){
    return<div>No shows were start</div>;
  }

  if(starredShows?.length > 0){
    return<ShowGrid shows={starredShows} />;
  }

  if (starredShowsError){
    <div>Error occured: {starredShowsError.message}</div>
  }
  return <div>Shows are loading</div>
};
    
 

export default Starred;
