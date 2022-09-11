import AuthorInformation from '../AuthorInformation/AuthorInformation'
import PostInformationHeader from '../PostInformation/PostInformationHeader'
import './OtherPosts.css'

export default function OtherPosts() {
  return (
    <div className='otherPosts'>
        <img className="thumbnailOtherPosts" src="https://i0.wp.com/www.cienciaedados.com/wp-content/uploads/2015/12/Apache-Spark-e-Data-Science-.png?fit=420%2C210&ssl=1" alt="Spark" />
        <div className='otherPostsContent'>
            <PostInformationHeader />
            <h2 className='otherPostTitle'> Understanding color theory: the color wheel and finding complementary colors </h2>
            <p className='otherPostSubtitle'>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
            </p>
            <AuthorInformation />
        </div>
        
    </div>
  )
}
