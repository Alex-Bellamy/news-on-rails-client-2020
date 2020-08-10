import React from 'react'
import { NavLink, Link } from "react-router-dom";

const CategoryHeader = () => {
  return (
    <div className='category-header'>
      <Link id="header" className="header item" to="/">Articles</Link>
      <NavLink id="economy" to="/economy">Economy</NavLink>
      <NavLink id="lifestyle" to="/lifestyle">Lifestyle</NavLink>
      <NavLink id="sports" to="/sports">Sports</NavLink>
    </div>
  )
}
export default CategoryHeader;