import React from 'react'
import './Main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from '../../Assets/img(1).jpg'

const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Machu Pichu',
    location:'Cusco,Peru',
    grade:'CULTURAL RELAX',
    fees:'$1445',
    description:'Machu Picchu is an Incan citadel in the Andes mountains northwest of Cusco, Peru. It was brought to worldwide fame by Hiram Bingham in 1911, who believed it to be the Lost City of the Incas upon setting eyes upon it.'

  },

  {/*{
    id:2,
    imgSrc:img2,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:7,
    imgSrc:img7,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:8,
    imgSrc:img8,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  },
  {
    id:9,
    imgSrc:img9,
    destTitle:'',
    location:'',
    grade:'CULTURAL RELAX',
    fees:'',
    description:''

  }*/},


]


const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most Visted Destinations
        </h3>
      </div>
      <div className="secContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                return(
                  <div key={id} className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgSrc} alt=
                      {destTitle}/>
                    </div>
                    <div className="cardInfo">
                      <h4 className='destTitle'>{destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>
                        
                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                      </button>
                    </div>


                  </div>
                  )
            })
          }

      </div>

    </section>
  )
}

export default Main
