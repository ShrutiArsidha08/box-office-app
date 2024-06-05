import React, { useState,useReducer} from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows,searchForPeople} from './../api/tvmaze';
import SearchForm from '../component/SearchForm';
import ActorsGrid from '../component/actors/ActorsGrid';
import ShowGrid from '../component/shows/ShowGrid';
import styled,{css} from 'styled-components'


const Home = () => {
  const [filter, setFilter] = useState(null);
  
   const { data:apiData,error:apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
       filter.searchOption==='shows'
       ?searchForShows(filter.q)
       :searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus:false,
  });

  const onSearch = async ({q,searchOption})=> {
    setFilter({q,searchOption});
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured:{apiDataError.message}</div>;
    }

 if (apiData?.length===0)
  {
return<div>no results</div>;
}

if (apiData) {
      return apiData[0].show ?(
      <ShowGrid show={apiData}/>)
      :(<ActorsGrid actors={apiData}/>)
      ; }
    return null;
      };
return (
    <div>
    
      <SearchForm  onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
