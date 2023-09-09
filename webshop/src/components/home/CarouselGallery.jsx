import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselGallery() {
  return (
    <div>
     <Carousel>
        <Carousel.Item>
          <img src="https://picsum.photos/id/237/500/200" alt="" />        
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/id/198/500/200" alt="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/id/88/500/200" alt="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default CarouselGallery