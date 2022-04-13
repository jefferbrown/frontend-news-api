import "./App.css";
import React, { useState, useEffect } from "react";
import CardsNews from "./components/CardsNews/CardsNews";
import axios from "axios";
import Pagination from "./components/Pagination";
function App() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
  // On Page load display all records
  const getAnswer = async () => {
    setLoading(true);
    const { data } = await axios(`http://localhost:3069/news/all`);
    setNews(data.articles);
    setLoading(false);
  };
  
    getAnswer();
  }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  // Search Records here
  const searchRecords = async () => {
    const params = {
      search: search,
    };
    if (search.length > 2)
      await axios(`http://localhost:3069/news/search`, { params }).then((response) => {
        console.log(response);
        
        setNews(response.data.articles);
      });
  };

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
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br></br>
      <CardsNews news={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={news.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
