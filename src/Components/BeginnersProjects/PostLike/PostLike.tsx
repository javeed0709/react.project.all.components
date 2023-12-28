import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'

const PostLike = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(false)

  const likeHandler = () => {
    // if (!like) {
    //   setCount(1)
    // } else {
    //   setCount(0)
    // }
    // setLike(!like)
    setCount(like ? 0 : 1)
    setLike(!like)
  }
  return (
    <div>
      <h3>Total Likes: {count}</h3>
      <div onClick={likeHandler}>
        {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
      </div>
    </div>
  )
}

export default PostLike
