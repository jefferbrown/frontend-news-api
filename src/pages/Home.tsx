
import React, { useState, useEffect, useContext } from "react";
import CardsNews from "../components/CardsNews/CardsNews";
import Pagination from "../components/Pagination/Pagination";
import { Context } from "../ContextApi";
import { Article } from "../shared/interfaces/news";
function Home() {
  const { store, actions }: any = useContext(Context);
  const [newsList, setNewsList] = useState([])
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setNewsList(store.news)
  }, [store.news])

  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Article[] = store.news.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const searchRecords = async () => {
    if (search.length >= 3) {
      actions.setQueries({
        search: search
      })
      actions.getAnswer()
      setNewsList(store.news)
    }
  }
  const searchRecordsDown = async () => {
    if (search.length < 3) {
      actions.setQueries({
        search: "latest"
      })
      actions.getAnswer()
      setNewsList(store.news)
    }
  }

  return (
    <div className="container">
      <br></br>
      <div className="mb-6">
        <label form="exampleFormControlInput1" className="form-label">
          Find News
        </label>
        <input
          type="email"
          className="form-control"
          id="FormControlInput1"
          placeholder="Search News"
          onKeyUp={searchRecords}
          onKeyDown={searchRecordsDown}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br></br>

      <CardsNews news={currentPosts} />
      <br />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={newsList.length}
        paginate={paginate}
      />
      <br />
    </div>
  );
}

export default Home;
