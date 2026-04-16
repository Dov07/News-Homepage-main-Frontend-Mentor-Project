import React from 'react'
import './Center.css'
import heroimg from '../assets/images/image-web-3-desktop.jpg'
const Center = () => {

  const news = [
    {
      id: 1,
      title: "Hydrogen VS Electics Cars",
      description: "Will hydrogen-fueled cars ever catch up to Evs?"
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      description: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      description: "Private funding by VC firms is down 50% YOY. We take a loog at what that menas."
    }
  ]

  return (
    <div className='middle-card'>
      <div className='left-grid'>
        <div className='top-side'>
          <img src={heroimg} alt="#" />
        </div>
        <div className='bottom-side'>
          <div className='bottom-left-side'>
            <h1>
              The Bright Future of Web 3.0?</h1>
          </div>
          <div className='bottom-right-side'>
            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilming its promise?</p>
            <button>Read More</button>
          </div>
        </div>

      </div>

      <div className='right-grid'>
        <div className='r-head'>
          <h1>New</h1>
        </div>

        {
          news.map((item) => (
            <div className='r-title-desc' key={item.id}>
              <a href="#"><h2>{item.title}</h2></a> 
              <p>{item.description}</p>
            </div>
          ))
          
        }

      </div>
    </div>
  )
}

export default Center