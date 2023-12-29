import Post from '../post/Post.js'
import Share from '../share/Share'
import './Feed.css'

import {Posts} from "../../DummyData.js"

export default function Feed() {
  return (
    <div className='Feed'>
      <div className='fdWrapper'>
        <Share />
        {Posts.map((p)=>(
            <Post key={p.id} post={p}/>
        ))}
      </div>  
    </div>
    )
}
