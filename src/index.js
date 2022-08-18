import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const wallPostsData = [
    {
        id: 1,
        text: "каракалы тоже замечательные",
        imageUrl: "https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png",
        likes: 1488,
    },
    {
        id: 2,
        text: "посмотрите на эту рыську",
        imageUrl: "https://blog.nature.org/science/files/2020/01/tnc_42185468_preview.jpg",
        likes: 12,
    },
    {
        id: 2,
        text: "В одном из городов Югры на улице заметили рысь!",
        imageUrl: "https://ugra-news.ru/upload/iblock/5c0/483583.jpg",
        likes: 12,
    }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>

          <App data={[wallPostsData]} />

      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
