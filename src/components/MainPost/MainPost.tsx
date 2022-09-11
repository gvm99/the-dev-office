import AuthorInformation from '../AuthorInformation/AuthorInformation'
import PostInformationHeader from '../PostInformation/PostInformationHeader'
import './MainPost.css'

export default function MainPost() {
  return (
    <div className='mainPost'>
        <img className="thumbnail" src="https://wallpaperaccess.com/full/2670514.jpg" alt="Microsoft Azure"/>
        <div className='mainPostInformation'>
            <PostInformationHeader />
            <h2 className='articleTitle'> Understanding color theory: the color wheel and finding complementary colors </h2>
            <p className='articleSubtitle'>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
            </p>
            <AuthorInformation />
        </div>
    </div>
  )
}
