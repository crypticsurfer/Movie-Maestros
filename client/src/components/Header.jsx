import { Link } from "react-router-dom";


function Header (){
  return (
    <div className="nav-container">
      <li>HOME</li>
      <Link to="filter">Filter</Link>
      <li>Recommended</li>
      <li>Most Liked</li>
      <li>My Likes</li>
      <li>Random</li>
      <Link to="login">LOGIN</Link>
    </div>
  )
}

export default Header;