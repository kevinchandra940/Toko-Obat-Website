import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
 Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Spinner
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: 'https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200720-bgd-009.jpg?sfvrsn=7d7eb369_2',
    altText: 'Slide 1',
    caption: 'Judul Berita'
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Judul Berita'
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Judul Berita'
  }
];

const Newspage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>


      <Row style={{ alignSelf: 'center', justifyContent: 'center', marginTop:'10vh', marginBottom:'20vh' }}>
                        <Card style={{ width: '30vw' }}>
                            <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200720-bgd-009.jpg?sfvrsn=7d7eb369_2" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button style={{ backgroundColor: 'black' }}>Read</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '30vw' }}>
                            <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200720-bgd-207.jpg?sfvrsn=d5aa2e35_2" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button style={{ backgroundColor: 'black' }}>Read</Button>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '30vw' }}>
                            <CardImg top style={{ width: '30vw', height: '50vh' }} src="https://www.who.int/images/default-source/health-topics/coronavirus/feature-stories/whocovid19-20200625-mru-204.jpg?sfvrsn=f4346a09_2" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button style={{ backgroundColor: 'black' }}>Read</Button>
                            </CardBody>
                        </Card>
                    </Row>




    </div>
  );
}

export default Newspage;