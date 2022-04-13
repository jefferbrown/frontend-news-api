import React, { useState } from 'react';
import "./CardsNews.css";
export interface Props {
  news: any;
}
export default function CardsNews(props: Props) {
  console.log(props.news);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (

    <div className="container">

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.news.map((item: any) => (
          <div className="col-4">
            <div className="card h-100">
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <small className="text-muted">{item.publishedAt}</small>
                <h5 className="card-title"><a href={item.url} target="_blank" className="card-link">{item.title}</a></h5>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-info float-right btn-sm"  onClick={togglePopup}>Show details</button>
              </div>
             
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
