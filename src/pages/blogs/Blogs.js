import React, { Component } from "react";
import "./Blogs.css";
import sakib from "./resource/sakib.jpg";
import mamun from "./resource/mamun.jpg";

class Blogs extends Component {
  render() {
    return (
      <div className="blog">
        <div className="sakib-blog">
          <img className="resize-img" src={sakib} alt="sakib" />
          <h2>Sakibur Rahman</h2>
          <p>Front-end web developer</p>
          <h3>Blog</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            aliquid sequi eum impedit neque quo non omnis commodi voluptates
            quisquam vel placeat aliquam at eveniet illum, explicabo doloremque
            veritatis quod ipsum quibusdam? Commodi tempore facere aliquid ex
            voluptatum itaque cum quam praesentium doloribus distinctio beatae,
            consectetur similique aut sunt illum officia ipsam laudantium iure
            vel minima officiis eligendi. Culpa autem deserunt ducimus?
            Repudiandae molestias reiciendis ex veritatis laborum, voluptatibus
            ad neque temporibus sed omnis autem dolor, eum incidunt corporis
            quisquam perspiciatis non quis minima ea saepe quidem nulla.
            Doloribus reiciendis unde explicabo nesciunt iusto quos ipsum libero
            iste maxime voluptate.
          </p>
        </div>
        <hr />
        <div className="sakib-blog">
          <img className="resize-img" src={mamun} alt="mamun" />
          <h2>Abdullah Al Manun</h2>
          <p>Front-end web developer</p>
          <h3>Blog</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            aliquid sequi eum impedit neque quo non omnis commodi voluptates
            quisquam vel placeat aliquam at eveniet illum, explicabo doloremque
            veritatis quod ipsum quibusdam? Commodi tempore facere aliquid ex
            voluptatum itaque cum quam praesentium doloribus distinctio beatae,
            consectetur similique aut sunt illum officia ipsam laudantium iure
            vel minima officiis eligendi. Culpa autem deserunt ducimus?
            Repudiandae molestias reiciendis ex veritatis laborum, voluptatibus
            ad neque temporibus sed omnis autem dolor, eum incidunt corporis
            quisquam perspiciatis non quis minima ea saepe quidem nulla.
            Doloribus reiciendis unde explicabo nesciunt iusto quos ipsum libero
            iste maxime voluptate.
          </p>
        </div>
      </div>
    );
  }
}

export default Blogs;
