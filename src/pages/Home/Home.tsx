import React from 'react'
import MainPost from '../../components/MainPost/MainPost'
import OtherPosts from '../../components/OtherPosts/OtherPosts'
import './Home.css'

export default function Home() {
  return (
    <>
      <MainPost />
        <div className="allPosts">
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
          <OtherPosts />
        </div>
    </>
  )
}
