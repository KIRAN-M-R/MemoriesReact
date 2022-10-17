import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'

import useStyles from './styles'

const Posts = ({setCurrentId}) => {
    const {posts, isLoading} = useSelector((state)=>state.posts)
    const classes = useStyles();
    console.log(posts);
    if(!posts.length && !isLoading) return 'No Posts';
  return (
    isLoading? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post)=>(
          <Grid key={post._id} xs={12} sm={12} md={6} lg={3} item >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts;