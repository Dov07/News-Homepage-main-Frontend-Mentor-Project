import React from 'react'
import './Bottom.css'
import retroPcsImg from '../assets/images/image-retro-pcs.jpg'
import topLaptopsImg from '../assets/images/image-top-laptops.jpg'
import gamingGrowthImg from '../assets/images/image-gaming-growth.jpg'

const Bottom = () => {

    const bottomNews = [
        {
            id: "01",
            title: "Reviving Retro PCs",
            description: "What happens whan oldu PCs are given modern upgrades?",
            img: retroPcsImg
        },
        {
            id:"02",
            title: "Top 10 Laptops of 2022",
            description:"Our best picks for various needs and budgets",
             img: topLaptopsImg
        },
          {
            id:"03",
            title: "The Growth of Gaming",
            description:"How the pandemic has sparked fresh opportunities.",
             img: gamingGrowthImg
        },
    ]


  return (
    <div className='bottom-card'>
        {
            bottomNews.map((e)=>(
                <div className='bottom-grid' key={e.id}> 
                    <div className='bottom-img'>
                        <img  src={e.img} alt="" />
                    </div>
                    <div className='bottom-text'>
                        <span>{e.id}</span>
                        <h3>{e.title}</h3>
                        <p>{e.description}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Bottom