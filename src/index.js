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
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);