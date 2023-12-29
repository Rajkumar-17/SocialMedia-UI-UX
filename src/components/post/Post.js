import './post.css'
import { BookmarkBorderOutlined, ChatBubbleOutline, FavoriteBorder, Favorite, MoreVert} from '@mui/icons-material';
import { Users } from '../../DummyData';
import { useState } from 'react';

export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [islike, setisLike] = useState(false);

  const likeHandler = ()=> {
    setLike(islike ? like-1: like+1)
    setisLike(!islike)
  }
  
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className="postTopLeft">
            <img className="postPP" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="People" />
            <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'> {post.desc} </span>
          <img className='postImage' src={post.photo} alt="post"/>
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <BookmarkBorderOutlined htmlColor='blue' className='postLike' />
              {islike ? (
                <Favorite htmlColor='red' className='postLike' onClick={likeHandler} />
              ) : (
                <FavoriteBorder htmlColor='red' className='postLike' onClick={likeHandler} />
              )}
            <span className='postLikeCounter'>Liked by<b><i>@gold_Nami</i></b> and <b>{like} others</b></span>
          </div>
          <div className='postBottomRight'>
            <ChatBubbleOutline htmlColor='gray' className='postLike'/>
            <span className='postCommentText'>view all {post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
