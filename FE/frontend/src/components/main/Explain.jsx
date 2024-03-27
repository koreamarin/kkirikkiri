import { useState, useEffect } from 'react';
import 'animate.css';
import styled from 'styled-components';
import simplestory from '../../assets/main/simplestory.png';
import simplebookshelf from '../../assets/main/simplebookshelf.png';
import simplelibrary from '../../assets/main/simplelibrary.png';
import story from '../../assets/main/story.png';
import bookshelf from '../../assets/main/bookshelf.png';
import library from '../../assets/main/library.png';
import storybg from '../../assets/main/storybg.png';
import bookshelfbg from '../../assets/main/bookshelfbg.png';
import librarybg from '../../assets/main/librarybg.png';
import storybg2 from '../../assets/main/storybg2.png';
import bookshelfbg2 from '../../assets/main/bookshelfbg2.png';
import librarybg2 from '../../assets/main/librarybg2.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  border-radius: 4rem;
  background-color: ${({ backgroundColor  }) => backgroundColor };
`;

const Slide = styled.div`
  width: 87%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4rem;

  &.active {
    opacity: 1;
  }
`;

const SlideBox = styled.div`

`

const Photo = styled.img`
  width: 70%;
  height: auto;
`;

const PhotoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 30%;
  height: 80%;
  margin: 0 0 0 5%;
`;

const ExplainPhoto = styled.img`
  position: absolute;
  width: auto;
  height: 90%;
`;

const ExplainPhotobg = styled.img`
  position: absolute;
`;

const ExplainPhotobg2 = styled.img`
  position: absolute;
`;

const Explain = styled.div`
  width: 60%;
  font-size: 2.7rem;
  font-weight: 300;
  color: black;
  white-space: pre-line;
  margin: 0 5% 0 4%;
  text-align: center;
  line-height:1.5;
`;

const Name = styled.div`
  font-size: 3.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;


const ThumbnailBox = styled.div`
  display: flex;
  width: 13%;
  justify-content: center;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  width: 15rem;
  height: 14.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:5px;
  cursor: pointer;
  z-index: 1;
  background: rgba(240, 240, 240, 0.5);
  box-shadow: 4px -4px 4px 0px rgba(190, 190, 190, 0.5) inset, -4px 4px 4px 0px rgba(255, 255, 255, 0.5) inset;
  backdrop-filter: blur(0.4rem);
  
  &.active {
    background: rgba(100, 100, 100, 0.8);
    box-shadow: 4px -4px 4px 0px rgba(170, 170, 170, 0.5) inset, 9px -9px 9px 0px rgba(255, 255, 255, 0.3) inset, -4px 4px 4px 0px rgba(255, 255, 255, 0.5) inset, -9px 9px 9px 0px rgba(170, 170, 170, 0.5 ) inset;
    backdrop-filter: blur(0.5rem);
    
  }
`;


const Description = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    { id: 1, 
      name:'스토리', 
      img: simplestory, 
      img2: story, 
      img3: storybg , 
      img4: storybg2, 
      img3Style: { left: '0%', top: '7%', width: '30%'}, 
      img4Style: { right: '-5%', top: '3%', width: '30%' }, 
      animate1: 'animate__animated animate__shakeX animate__infinite animate__slower animate__delay-2s',
      animate2: 'animate__animated animate__shakeX animate__infinite animate__slower',
      backgroundColor :'rgba(255, 242, 216, 0.80)', 
      explain: '“안녕 AI 친구인 끼리코와 함께 한문장씩 번갈아가며\n나만의 이야기를 쓸 수 있어!“'},
    { id: 2, name:'책장',
      img: simplebookshelf, 
      img2: bookshelf, 
      img3: bookshelfbg, 
      img4: bookshelfbg2, 
      img3Style: { left: '5%', top: '5%', width: '22%' }, 
      img4Style: { right: '-5%', top: '15%', width: '25%' }, 
      animate1: 'animate__animated animate__shakeY animate__infinite animate__slower animate__delay-1s',
      animate2: 'animate__animated animate__shakeY animate__infinite animate__slower',
      backgroundColor :'rgba(230, 255, 218, 0.80)', 
      explain: '“안녕 책장에 가면 네가 쓴 이야기를 확인할 수 있어!\n네가 쓴 이야기를 영어로 공부하면\n그림을 생성해줄게.\n너만의 그림 동화책을 만들어볼래?”'},
    { id: 3, 
      name:'도서관',
      img: simplelibrary, 
      img2: library, 
      img3: librarybg,
      img4: librarybg2, 
      img3Style: { left: '15%', top: '3%', width: '20%'}, 
      img4Style: { right: '-15%', top: '15%', width: '23%'},
      animate1: 'animate__animated animate__heartBeat animate__infinite animate__delay-1s', 
      animate2: 'animate__animated animate__heartBeat animate__infinite',
      backgroundColor :'rgba(223, 228, 255, 0.80)', 
      explain: '“안녕 도서관에 가면 다른 친구들의 동화책을\n읽어볼 수 있고, 친구들이 만든 동화로도\n공부해볼 수 있어!”'},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => {
        return prevIndex === slides.length ? 1 : prevIndex + 1;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <Container>
      <ThumbnailBox>
        {slides.map((slide) => (
          <Thumbnail
            key={slide.id}
            className={slide.id === slideIndex ? 'active' : ''}
            onClick={() => moveDot(slide.id)}>
            {slide.id === slideIndex ? (
              <Name>{slide.name}</Name>
            ) : (  
              <Photo src={slide.img} alt={`Thumbnail for ${slide.explain}`} />
            )}
          </Thumbnail>
        ))}
      </ThumbnailBox>
      <SlideBox>
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            className={slide.id === slideIndex ? 'active' : ''}
            style={{ backgroundColor: slide.backgroundColor }} 
          >
            <PhotoBox>
              <ExplainPhoto src={slide.img2}/>
              <ExplainPhotobg src={slide.img3} style={slide.img3Style} className={slide.animate1} animate-delay={slide.animation5} />
              <ExplainPhotobg2 src={slide.img4} style={slide.img4Style} className={slide.animate2} />
            </PhotoBox>
            <Explain>{slide.explain}</Explain>
          </Slide>
        ))}
      </SlideBox>
    </Container>
  );
};

export default Description;

