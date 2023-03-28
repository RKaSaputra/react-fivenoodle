import React, { useState, useEffect } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import axios from "axios";
import "../../../assets/css/blog.css";

const Index = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getBlog();
    getBlogCategory();
  }, []);

  const getBlogCategory = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/blog-category`
    );
    setCategories(response.data);
  };

  const getBlog = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog`);
    setBlogs(response.data);
  };
  return (
    <>
      <Navbar activeBar="blog" />
      <section className="banner-blog">
        <div className="banner-text heading-primary">
          Healthy Meals Made Easy <span>Discover Our Delicious Options </span>
          Experience amazing benefit
        </div>
      </section>
      <section className="blog-container">
        <div className="blogs">
          {blogs.map((blog, index) => (
            <div className="post" key={index}>
              <div className="card">
                <div className="post-image">
                  <img src={blog.url} alt="" />
                </div>
                <h3>{blog.Nama}</h3>
                <p>{blog.Deskripsi}</p>
                <button className="btn btn-blog ">Read More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="category">
          <h2>Categories</h2>
          {categories.map((category, index) => (
            <>
              <hr key={index} />
              <a href="#">{category.Nama}</a>
            </>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
