import React, {Component} from 'react'
import { CarouselItemWrapper, CarouselListContainer, CarouselImage,  CarouselLeftButton, CarouseRightButton } from './CarouselStyle'

class MediaCarousel extends Component {

	constructor(props){
		super(props);
		this.state= {transition : '0'};
		this.carouselSlide.bind(this);
	}
    carouselBuilder = () => {
    	const carouselData = []
    	// eslint-disable-next-line indent
        console.log('carouselElement')
    	const carouselStack = [
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
    		'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg',
    	];
    	for(let carouselElement = carouselStack.length-1; carouselElement >= 0; carouselElement--){
    		carouselData.push(<CarouselItemWrapper><CarouselImage src={carouselStack[carouselElement]}/></CarouselItemWrapper>)
    		console.log('carouselElement', carouselElement)
    	}
    	return carouselData
    }
    carouselSlide = e => {
    	if(e.keyCode == "37"){
            this.setState({transition : '-300px'})
            console.log("right")
    	}
    	else if (e.keyCode == "39"){
    		console.log("right")
    		this.setState({transition : '300px'})
    	}
    }
    render(){
    	return(
    		<section>
    			<CarouselListContainer data= {this.state.transition}>
    				{this.carouselBuilder()}
    				<CarouselLeftButton onKeyDown={(e) => {this.carouselSlide(e)}}>left</CarouselLeftButton>
    				<CarouseRightButton>right</CarouseRightButton>
    			</CarouselListContainer>
    		</section>
    	)
    }
}

export default MediaCarousel
export { MediaCarousel }