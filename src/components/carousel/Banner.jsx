import React from 'react'

const Item = ({ item, index }) => (
  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>

    <video id='bgvideo' muted autoPlay loop playsInline>
      <source src='../images/workshop/hero_video.mp4' type='video/mp4' />
  Your browser does not support the video tag.
    </video>
  </div>
)

const Banner = (props) => {
  return (
    <div
      id={props.id}
      className={`carousel slide ${props.className}`}
      data-ride='carousel'
      style={{ minHeight: 100 }}
    >

      <div className='carousel-inner'>
        {props.data.map((item, index) => (
          <Item item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Banner
