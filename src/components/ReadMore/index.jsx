import {useState} from 'react'
import './index.css'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)

  //write your code here
  const onToggleReadMore = () => {
    setIsReadMore(prevState => !prevState)
  }
  const descriptionText = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">React Hooks</h1>
        <p className="subtitle">Hooks are a new addition to React</p>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <p className="description">{descriptionText}</p>
        <button type="button" className="button" onClick={onToggleReadMore}>
          {isReadMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  )
}

export default ReadMore
