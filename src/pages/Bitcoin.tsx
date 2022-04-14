
import React, { useState, useContext } from "react";
import CardsNews from "../components/CardsNews/CardsNews";
import Pagination from "../components/Pagination/Pagination";
import { Context } from "../ContextApi";
import { Article } from "../shared/interfaces/news";
export default function Bitcoin() {
  const { store }: any = useContext(Context); 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost:number = currentPage * postsPerPage;
  const indexOfFirstPost:number = indexOfLastPost - postsPerPage;
  const currentPosts: Article[] = store.news.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">

      <CardsNews news={currentPosts}  />
      <br />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={store.news.length}
        paginate={paginate}
      />
      <br />
    </div>
  );
}


