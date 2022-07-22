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
      </div>
    );
  }

  
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);