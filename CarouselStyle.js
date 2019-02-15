import styled from 'styled-components';

const CarouselItemWrapper = styled.li`
    width:  250px;
    height: 250px;
    position: relative;
    display: flex;
    flex: 0 0 20rem;
`

const CarouselSection = styled.section`
    display: flex;
`

const CarouselListContainer = styled.ul`
    display: flex;
    padding: 0;
    flex-direction: row;
    transform: ${props=> (props.data ? 'translate('+ props.data +',0)' : 'translate(20rem,0)')};
    transition: all 1s ease-in-out;
`
const CarouselImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const CarouselLeftButton = styled.button`
    position: absolute;
    left: 0;
    right: auto;
`
const CarouseRightButton = styled.button`
    position: absolute;
    right: 0;
    left: auto;
`
export { CarouselItemWrapper, CarouselListContainer, CarouselImage, CarouselLeftButton, CarouseRightButton }