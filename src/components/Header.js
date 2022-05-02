import globe from "./../images/globe.png"

export default function Header() {
  return (
    <div className="header">
      <img className="header--globe" src={globe} alt="globe" />
      <span className="header--text">my travel journal.</span>
    </div>
  )
}
