import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import PostListItem from "./PostListitem";
import checkAuth from "../auth/checkAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function ListPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();

  function fetchPosts() {
    setLoading(true);
    axios
      .get('https://medicalstore.mashupstack.com/api/medicine', {
        headers: { 'Authorization': "Bearer " + user.token }
      })
      .then((response) => {
        setAllPosts(response.data);
        setFilteredPosts(response.data); // Set filteredPosts initially with all the fetched posts
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredPosts(allPosts);
    } else {
      const filteredItems = allPosts.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      setFilteredPosts(filteredItems);
    }
  };

  return (
    <div style={{ backgroundColor: "#ADD8E6", minHeight: "100vh", padding: "20px 0" }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4"> <b>Medicine List</b> </h1>
          </div>
        </div>
        <div className="row align-items-start">
  <div className="col-md-3 offset-md-1">
            <Link to="/blog/posts/create" className="btn btn-danger mb-3">
              Create Medicine
            </Link>
          </div>
          <div className="col-md-5 offset-md-1">
            <form className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  placeholder="Search medicines"
                />
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleSearch}
                >
                  <FontAwesomeIcon icon={faSearch} /> Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 offset-md-1">
            {filteredPosts.length === 0 ? (
              <p>No matching medicines found.</p>
            ) : (
              filteredPosts.map((post) => (
                <PostListItem key={post.id} post={post} refresh={fetchPosts} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(ListPosts);
