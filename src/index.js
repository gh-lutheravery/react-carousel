import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

var LISTCOUNT = 30;
var ITEMSPERPAGECOUNT = 30;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{
        items: initPaginatedList()
      }],
      pageNum: 0
    };
  }

  initPaginatedList() {
    let nameList = Array(LISTCOUNT).fill(null);
    let tally = 0;
    nameList.forEach(element => {
      tally++;
      element = "Image".concat(tally)
    });

    return (
      <PaginatedList
        list={nameList}
        itemsPerPage={ITEMSPERPAGECOUNT}
        renderList={(list) => (
          <Item/>
        )}
      />
    );
  }

  slideCarousel(direction) {
    this.setState({
      itemList: itemList.currentPage = direction ? itemList.currentPage + 1 : itemList.currentPage - 1
    });
    //pageCount = Math.ceil(itemList.length / itemList.itemsPerPage);
    startIndex = itemList.itemsPerPage * itemList.currentPage
    endIndex = startIndex + itemList.itemsPerPage
    itemList.slice(startIndex, endIndex).scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      <div id="carousel-container">
        <h1 id="carousel-title">Carousel Widget</h1>
        <Container itemList={this.state.itemList}/>
        <Arrow direction="backward" onClick={(direction) => this.slideCarousel(direction)}/>
        <Arrow direction="forward" onClick={(direction) => this.slideCarousel(direction)}/>
      </div>
    );
  }
}

function Container(props) {
  return (
    <ul>
      {this.props.itemList}
    </ul>
  );
}

function Item(props) {
  return (
    <li>
      <span class="item">{this.props.name}</span>
    </li>
  );
}

function Arrow(props) {
  return (
    <button className={this.props.direction} onClick={props.onClick}>
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);