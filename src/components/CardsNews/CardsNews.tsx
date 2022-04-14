import { Article } from "../../shared/interfaces/news";
import "./CardsNews.css";
export interface Props {
  news: Article[]; 
}
export default function CardsNews(props: Props) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4" id="cards">
        {props.news.map((item: any) => (
          <div className="col-4" id="num">
            <div className="card h-100">
              <img src={item.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <small className="text-muted">{item.publishedAt}</small>
                <h5 className="card-title"><a href={item.url} rel="noreferrer" target="_blank" className="card-link">{item.title}</a></h5>
                <p className="card-text">{item.description}</p>
              </div> 
             
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
