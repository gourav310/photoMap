import React, { useEffect, useState } from "react";
import  Img from "./img";
import {useParams,useLocation} from "react-router-dom";
import Pagination from "./Pagination"
export default function App(){
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      let query = useQuery();
    
    const [array,setArray]= useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = array.slice(indexOfFirstPost, indexOfLastPost);
    const pageNo = pageNumber => setCurrentPage(pageNumber);
    const lat = query.get("lat");
    const long= query.get('long');
    console.log(lat,long)
    useEffect(()=>{
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=687943e0e95d362b52cd9bb573a876c2&lat=${lat}&lon=${long}&per_page=50&page=4&format=json&nojsoncallback=1`)
        .then((r)=>r.json()).then((r)=>{
          //  alert(r);
            let picArray = r.photos.photo.map((pic) => {
                const path = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';     
                return path;        
            }
       )
        setArray(picArray);
    }).catch((e)=>console.log(e))},[])
    return(<div>
    {currentPosts.map((source)=><Img  source={source}/>)}
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={array.length}
        pageNo={pageNo}
        query={query}
      />
    </div>)

}