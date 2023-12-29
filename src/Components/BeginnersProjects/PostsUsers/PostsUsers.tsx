import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

const PostsUsers = () => {
  const [user, setUser] = useState<Post[]>([])
  const [post, setPost] = useState<Post[]>([])

  const getData = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      setUser(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const handlerPost = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      setPost(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => res.json())
    //   .then((data) =>
    //     // console.log(data)
    //     setUser(data)
    //   )
    getData()
  }, [])
  return (
    <>
      <button onClick={handlerPost}>LoadData</button>
      {post && post.map((item) => <li key={item.id}>{item.body}</li>)}
      <Card sx={{ maxWidth: 275 }}>
        {user &&
          user.map((item) => (
            <CardContent sx={{ mt: 3 }} key={item.id}>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2">{item.body}</Typography>
            </CardContent>
          ))}
      </Card>
    </>
  )
}

export default PostsUsers
