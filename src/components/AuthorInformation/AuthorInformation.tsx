import './AuthorInformation.css'

export default function AuthorInformation() {
  return (
    <div className='author'>
        <img className="authorPicture" src={require('../../images/me.png')} alt="Author"/>
        <div className='authorInformation'>
            <span className='authorName'>
                Guilherme Machado
            </span>
            <span className='authorTitle'>
                Software Engineer
            </span>
        </div>
    </div>
  )
}
