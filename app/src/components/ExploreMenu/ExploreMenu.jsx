/* eslint-disable react/prop-types */
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id natus maiores quas adipisci, dolor corporis repudiandae. Dolorem, quam enim repellendus reprehenderit illum accusantium aut? Deserunt maiores nihil veniam nisi illum!</p>
      <div  className="explore-menu-list">
        {
            menu_list.map((item, index) => (
                <div 
                    onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} 
                    className='explore-menu-list-item' 
                    key={index}
                >
                    <img 
                        className={category === item.menu_name ? "active" : ""} 
                        src={item.menu_image} 
                        alt={item.menu_name}
                    />
                    <p>{item.menu_name}</p>
                </div>
            ))
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
