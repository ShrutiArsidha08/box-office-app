import{useQuery} from '@tanstack/react-query';
import{getShowsByIds} from '../api/tvmaze'
import{useStarredShows} from '../lib/useStarredShows';
import ShowGrid from '../component/shows/ShowGrid';
import {TextCenter} from '../component/commom/TextCenter'
const Starred = () => {
  const [{starredShowsIds}]=useStarredShows();

  const { data:starredShows,error:starredShowsError } = useQuery({
    queryKey: ['starred',starredShowsIds],
    queryFn: () => 
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show=>({show}))),
    
    refetchOnwindowFocus: false,
  });

  if(starredShows?.length === 0){
    return<TextCenter>No Shows were starred</TextCenter>;
  }

  if(starredShows?.length>0){
    return<ShowGrid shows={starredShows} />;
  }

  if (starredShowsError){
    <div>Error occured:{starredShowsError.message}</div>
  }
  return <TextCenter>Shows are loading</TextCenter>
};
    
 

export default Starred;
