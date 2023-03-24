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
    console.log(blogs);
    console.log(categories);
  }, []);

  const getBlogCategory = async () => {
    const response = await axios.get("http://localhost:5000/blog-category");
    setCategories(response.data);
  };

  const getBlog = async () => {
    const response = await axios.get("http://localhost:5000/blog");
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
          {/* <div className="post">
            <div className="card">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt dolorem consequatur molestiae dolor itaque sunt natus
                quam voluptates nesciunt nemo voluptatibus, fugit fuga laborum
                aperiam, pariatur provident earum quidem accusamus.
              </p>
              <button className="btn btn-blog ">Read More</button>
            </div>
          </div>
          <div className="post">
            <div className="card">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <h3>Healty Food</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt dolorem consequatur molestiae dolor itaque sunt natus
                quam voluptates nesciunt nemo voluptatibus, fugit fuga laborum
                aperiam, pariatur provident earum quidem accusamus.
              </p>
              <button className="btn btn-blog ">Read More</button>
            </div>
          </div>
          <div className="post">
            <div className="card">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt dolorem consequatur molestiae dolor itaque sunt natus
                quam voluptates nesciunt nemo voluptatibus, fugit fuga laborum
                aperiam, pariatur provident earum quidem accusamus.
              </p>
              <button className="btn btn-blog ">Read More</button>
            </div>
          </div> */}
        </div>
        <div className="category">
          <h2>Categories</h2>
          {categories.map((category, index) => (
            <>
              <hr key={index} />
              <a href="#">{category.Nama}</a>
            </>
          ))}
          {/* <hr />
          <a href="#">Dessert</a>
          <hr />
          <a href="#">Vegetables</a>
          <hr />
          <a href="#">Fruits</a>
          <hr />
          <a href="#">Beverages</a>
          <hr />
          <a href="#">Snacks</a>
          <hr /> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
