import styled from '@emotion/styled';
import { useState } from 'react';

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 16/9;
	overflow: hidden;
	border-radius: 1rem;
	background: rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* opacity: ${({ active }) => (active ? '1' : '0')}; */
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease-in-out;
`;

// const CarouselControls = styled.div`
//   position: absolute;
//   inset: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 .75rem;
// `;

// const CarouselArrowButton = styled.button`
//   width: 2rem;
//   height: 2rem;
//   border-radius: 50%;
//   border: none;
//   background: rgba(0, 0, 0, 0.6);
//   transition: background-color 0.3s ease-in-out;
//   &:hover{
//     background: rgba(0, 0, 0, 0.85);
//   }
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 2;
// `;

// const DotsContainer = styled.div`
//   position: absolute;
//   bottom: .5rem;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 0.5rem;
//   background: rgba(0, 0, 0, 0.6);
//   transition: background-color 0.3s ease-in-out;
//   &:hover{
//     background: rgba(0, 0, 0, 0.85);
//   }
//   padding: 0.25rem .5rem;
//   border-radius: 2rem;
//   z-index: 2;
// `;

// const CarouselDot = styled.button`
//   width: 0.5rem;
//   height: 0.5rem;
//   border-radius: 50%;
//   border: none;
//   background: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.5)')};
//   cursor: pointer;
//   transition: background-color 0.3s ease-in-out;

//   &:hover {
//     background: rgba(255, 255, 255, 0.85);
//   }
// `;

export const ProjectCarousel = ({ images }) => {
  // const [currentImage, setCurrentImage] = useState(0);

  // const handleImageChange = (newIndex) => {
  //   setCurrentImage(newIndex);
  // };

  // const nextImage = () => {
  //   handleImageChange((currentImage + 1) % images.length);
  // };

  // const prevImage = () => {
  //   handleImageChange((currentImage - 1 + images.length) % images.length);
  // };

  return (
    <ImageContainer>
      {/* {images.map((image, index) => ( */}
        <ProjectImage
          // key={index}
          src={images[0]}
          alt={`Vista previa ${images[0]}`}
          // alt={`Vista previa ${index + 1}`}
          // active={currentImage === index}
          // loading={index === 0 ? "eager" : "lazy"}
        />
      {/* ))} */}
      {/* {images.length > 1 && (
        <>
          <CarouselControls>
            <CarouselArrowButton onClick={prevImage} aria-label="Imagen anterior">
              <svg width="20" height="20" style={{ transform: 'rotate(180deg)' }} viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CarouselArrowButton>
            <CarouselArrowButton onClick={nextImage} aria-label="Siguiente imagen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CarouselArrowButton>
          </CarouselControls>
          <DotsContainer>
            {images.map((_, index) => (
              <CarouselDot
                key={index}
                active={currentImage === index}
                onClick={() => handleImageChange(index)}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </DotsContainer>
        </>
      )} */}
    </ImageContainer>
  );
}; 