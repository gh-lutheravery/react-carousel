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
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);