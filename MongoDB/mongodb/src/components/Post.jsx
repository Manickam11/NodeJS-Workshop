import {useEffect} from 'react'
import axios from "axios"

function Post() {

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(data=>console.log(data.data))
        .catch(error=>console.log(error))
    },[]);

  return (
    <div>
        {
            posts.map(data=>{
                return(
                    <div key={data.id}>
                        <h2>{data.title}</h2>
                        <h2>{data.body}</h2>
                    </div>
                )
            })    
        }
    </div>
  )
}

export default Post