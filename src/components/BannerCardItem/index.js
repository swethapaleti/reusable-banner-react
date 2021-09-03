import './index.css'

const BannerCardItem = props => {
  const {detail} = props
  const {headerText, description, className} = detail
  return (
    <li className={`${className} styling`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
