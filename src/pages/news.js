import React from "react";
import Axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Input,
  Spinner
} from "reactstrap";

const url = "http://newsapi.org/v2/top-headlines?country=";
const cat = "&category=";
let country = "id";
let category = "health";
const key = "&apikey=18575583df444e089170f7702efaa7c1";


class Newspage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeIndex: 0,
      setActiveIndex: 0,
      animating: false,
      setAnimating: false,
      content: [
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ],
      countries: [
        { country: "argentina", code: "ar" },
        { country: "indonesia", code: "id" },
        { country: "australia", code: "au" },
        { country: "brazil", code: "br" },
        { country: "canada", code: "ca" },
        { country: "china", code: "cn" },
        { country: "colombia", code: "co" },
        { country: "egypt", code: "eg" },
        { country: "france", code: "fr" },
        { country: "germany", code: "de" },
        { country: "hong kong", code: "hk" },
        { country: "india", code: "in" },
        { country: "indonesia", code: "id" },
        { country: "israel", code: "il" },
        { country: "japan", code: "jp" },
        { country: "united kingdom", code: "gb" },
        { country: "united states", code: "us" },
      ],
      categories: [
        "health",
        "business",
        "sports",
        "technology",
        "entertainment",
        "science",
      ],
    };
  }
  componentDidMount() {
    Axios.get(url + country + cat + category + key)
      .then((res) => {
        this.setState({ data: res.data.articles });
        console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    Axios.get(url + country + cat + category + key)
      .then((res) => {
        this.setState({ data: res.data.articles });
        // console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  }

  nextSlide = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.state.content.length - 1 ? 0 : this.state.activeIndex + 1;
    this.state.setActiveIndex(nextIndex)
  }

  prevSlide = () => {
    if (this.state.animating) return;
    const newIndex = this.state.activeIndex === 0 ? this.state.content.length - 1 : this.state.activeIndex - 1;
    this.state.setActiveIndex(newIndex)
  }

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.state.setActiveIndex(newIndex);
  }


  renderCard() {
    return this.state.data.map((item) => {
      return (

        <Card style={{ width: '30vw' }} className="mb-5">
          <CardImg
            top style={{ width: '30vw', height: '50vh' }}
            src={item.urlToImage}
            alt="article-img"
          ></CardImg>
          <CardBody>
            <CardTitle style={{ fontWeight: "700", color: '#e85661' }}>{item.title}</CardTitle>
            <CardText style={{ color: '#e85661' }}>{item.description}</CardText>
            <Button style={{ backgroundColor: '#e85661', borderColor: '#e85661', marginLeft:'4vw',marginTop:'5vh', width:'20vw' }} type="button" href={item.url}>
              Baca Lebih Lanjut ...
            </Button>
          </CardBody>
        </Card>
      );
    });
  }
  categoryButton = () => {
    return this.state.categories.map((item) => {
      return (
        <Button
          style={{ backgroundColor: '#e85661', textDecoration: 'none', borderColor: '#e85661', marginRight: '1vw' }}
          type="button"
          innerRef={(newscategory) => (this.newscategory = newscategory)}
          onClick={() => this.renderCategory(item)}
        >
          {item}
        </Button>
      );
    });
  };
  renderCountry = () => {
    let newscount = this.newscountry.value;
    this.state.countries.map((item) =>
      item.country === newscount.toLowerCase() ? (country = item.code) : null
    );
    this.newscountry.value = "";
  };
  renderCategory = (item) => {
    category = item;
    console.log(item);
  };

  render() {
    setTimeout(() => this.setState({ ready: true }), 1500)
    if (this.state.ready) {
      return (
        <div>
          <h1 style={{ color: '#e85661', marginLeft: '46vw' }}>Berita</h1>
          <h2 style={{ color: '#e85661', marginLeft: '46vw' }}>Hari Ini</h2>

          <div className="mb-3" style={{ display: 'flex' }}>
            <Input
              type="text"
              innerRef={(newscountry) => (this.newscountry = newscountry)}
              className="my-3"
              placeholder="contoh : japan"
              style={{ width: '20vw', marginLeft: '38vw' }}
            ></Input>
            <Button style={{ backgroundColor: '#e85661', textDecoration: 'none', borderColor: '#e85661', width: '10vw', height: '5vh', marginTop: '2.3vh', marginLeft: '2vw' }} type="button" onClick={this.renderCountry}>
              Cari
          </Button>
          </div>
          <h2 style={{ marginLeft: '46vw', color: '#e85661', marginBottom: '5vh' }}>Kategori</h2>
          <div
            style={{ display: "flex", marginLeft: '30vw' }}
            className="mt-3"
          >
            {this.categoryButton()}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
            className="mt-5"
          >
            {this.renderCard()}
          </div>
        </div>
      );
    }
    else {
      return (
        <div style={{ marginLeft: '32vw', marginTop: '20vh', marginBottom: '40vh' }}>
          <Spinner type="grow" color="primary" style={{ width: '10vh', height: '5vw' }} />
          <Spinner type="grow" color="secondary" style={{ width: '10vh', height: '5vw' }} />
          <Spinner type="grow" color="success" style={{ width: '10vh', height: '5vw' }} />
          <Spinner type="grow" color="danger" style={{ width: '10vh', height: '5vw' }} />
          <Spinner type="grow" color="warning" style={{ width: '10vh', height: '5vw' }} />
          <Spinner type="grow" color="info" style={{ width: '10vh', height: '5vw' }} />
          <Spinner type="grow" color="dark" style={{ width: '10vh', height: '5vw' }} />
        </div>
      )

    }
  }
}
export default Newspage;