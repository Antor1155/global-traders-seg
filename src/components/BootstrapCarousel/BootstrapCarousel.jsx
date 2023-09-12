import Carousel from 'react-bootstrap/Carousel';
import "./BootstrapCarousel.css"

const BootstrapCarousel = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img className='carosel-img' src='/staticImages/banner.png' alt='banner' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='carosel-img' src='/staticImages/banner-2.png' alt='banner' />
            </Carousel.Item>
            
        </Carousel>
    )
}

export default BootstrapCarousel