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
        renderList={(list) => (
          <ul>
          {list.map((itemName) => {
            return (<Item name={itemName}/>);
          })}
          </ul>
        )}
      />
    );
  }
  
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{
        items: initPaginatedList()
      }],
      pageNum: 0,
      viewPortStartIndex: 0,
      viewPortEndIndex: 7
    };
  }

  slideCarousel(direction) {
    let itemListCopy = this.state.itemList.slice();
    if (direction === FORWARD)
      itemListCopy.currentPage = this.stateitemList.currentPage + 1;
    else if (direction === BACKWARD)
      itemListCopy.currentPage = this.stateitemList.currentPage - 1;

    this.setState({
        itemList: itemListCopy,
        viewPortStartIndex: this.state.itemList.itemsPerPage * this.state.itemList.currentPage,
        viewPortEndIndex: this.state.viewPortStartIndex + this.state.itemList.itemsPerPage
    });

    ViewPortItems.slideAnimate();
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