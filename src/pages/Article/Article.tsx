import React from 'react'
import AuthorInformation from '../../components/AuthorInformation/AuthorInformation'
import PostInformationHeader from '../../components/PostInformation/PostInformationHeader'
import './Article.css'
export default function Article() {
  return (
    <>
      <div className='articleInformation'>
        <PostInformationHeader />
        <h2 className='otherPostTitle'> Understanding color theory: the color wheel and finding complementary colors </h2>
        <AuthorInformation />
      </div>
      <div className='articleContent'>
        <img src="https://wallpaperaccess.com/full/2670514.jpg" alt="Microsoft Azure"/>
        <p>
          Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.
        </p>
        <p>
          Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.
        </p>
        <p>
          Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.
        </p>
      </div>
    </>
  )
}
