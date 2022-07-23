import React, { useRef } from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PaginatedList } from 'react-paginated-list';

var LISTCOUNT = 30;
var ITEMSPERPAGECOUNT = 30;
var BACKWARD = "backward"; 
var FORWARD = "forward";
class Carousel extends React.Component {
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
        renderList={(list) => {

          list.map((itemName) => {
            <Item name={itemName}/>
          })
          
        }}
      />
    );
  }
  
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{
        items: initPaginatedList()
      }],
      pageNum: 0
    };
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
        <Container itemList={this.state.itemList.renderList()}/>
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
    <Carousel />
  </React.StrictMode>
);