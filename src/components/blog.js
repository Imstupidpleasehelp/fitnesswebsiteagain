import React, { Component } from "react";
import Collapsible from "react-collapsible";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      blogitems: null,
    };
  }

  render() {
    if (this.props.propdata) {
      var blogitems = this.props.propdata.blog.blogitems.map(function (
        blogitems
      ) {
        return (
          <div>
            <div key={blogitems.title} id={blogitems.title} className="row">
              <div className="leftcolumn">
                <img
                  src={blogitems.previewimage}
                  className="fakeimg"
                  height="300px"
                  alt={blogitems.title}
                ></img>
                <p>{blogitems.date}</p>
                <Collapsible className="" trigger={blogitems.title}>
                  <p>{blogitems.firstparagraph}</p>
                  <p>aaaa</p>
                </Collapsible>
              </div>
            </div>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;

    return (
      <div>
        <div className="blogtitle">My blog</div>
        <div className="sidebar">
          Social media links
          <p>Link 1</p>
          <p>Link 2</p>
          <p> link 3</p>
        </div>
        <div className="blogpage">{blogitems}</div>
      </div>
    );
  }
}

export default Blog;
