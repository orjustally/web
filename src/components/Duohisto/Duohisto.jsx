
import { Carousel } from 'react-carousel-minimal';
import image1 from '../../assets/duo1.jpeg'
import image2 from '../../assets/duo2.jpeg'
import image3 from '../../assets/duo3.jpeg'
import image4 from '../../assets/duo4.jpeg'
import image5 from '../../assets/duo5.jpeg'
import image6 from '../../assets/duo6.jpeg'
import image7 from '../../assets/duo7.jpeg'
import image8 from '../../assets/duo8.jpeg'
import image9 from '../../assets/duo9.jpeg'
import image10 from '../../assets/duo10.jpeg'
import image11 from '../../assets/duo11.jpeg'
import image12 from '../../assets/duo12.jpeg'
import image13 from '../../assets/duo13.jpeg'
import image14 from '../../assets/duo14.jpeg'
import image15 from '../../assets/duo15.jpeg'
import image16 from '../../assets/duo16.jpeg'
import image17 from '../../assets/duo17.jpeg'
import image18 from '../../assets/duo18.jpeg'


export default function Duohisto() {
const data = [
    {
      image: image1,
      caption: "Duo Histopath"
    },
    {
      image: image2,
      caption: "Index"
    },
    {
      image: image3,
      caption: "Brief"
    },
    {
      image: image4,
      caption: "Scope"
    },
    {
      image: image5,
      caption: "Workflow"
    },
    {
      image: image6,
      caption: "Workflow"
    },
    {
      image: image7,
      caption: "Concept"
    },
    {
      image: image8,
      caption: "Result"
    },
    {
      image: image9,
      caption: "Result"
    },
    {
      image: image10,
      caption: "Result"
    },
    {
      image: image11,
      caption: "Result"
    },
    {
      image: image12,
      caption: "Result"
    },
    {
      image: image13,
      caption: "Result"
    },
    {
      image: image14,
      caption: "Result"
    },
    {
      image: image15,
      caption: "Result"
    },
    {
      image: image16,
      caption: "Result"
    },
    {
      image: image17,
      caption: "Result"
    },
    {
      image: image18,
      caption: "Result"
    },
  ];

  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'light',
  }
  const slideNumberStyle = {
    fontSize: '13px',
    fontWeight: 'light',
  }
  return (
    <div style={{padding: "30px 0 60px 0"}}className="duohistoc">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding:0
        }}>
          <Carousel
            className="meow" 
            data={data}
            time={2000}
            width="880px"
            height="500px"
            captionStyle={captionStyle}
            radius="3px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="60px"
            style={{
              textAlign: "center",
              maxWidth: "880px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}