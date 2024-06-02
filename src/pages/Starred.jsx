import{useStarredShows} from "../lib/useStarredShows";

const Starred = () => {
  const [{starredShows}]=useStarredShows();
    
  return <div>Starred Page,starred {starredShows?starredShows.length:0}</div>;
};
export default Starred;
