import React from 'react'
import SocialHeader from './SocialHeader'

export default function SocialHomeScreen() {

  const addPost =(post)=>{
    const updatedPosts =[];
    updatedPosts.unshift(post);
   // setPosts(updatedPosts)

  }
  const removePost =(post)=>{
    const updatedPosts=[];
    const index = updatedPosts.indexOf(post)
    updatedPosts.slice(index, 1)
   // setPosts(updatedPosts)
  }

  return (
    <SocialHeader />
  )
}
