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
          <div key={blogitems.title} className="col-sm-12">
            <div className="blog-item">
              <Collapsible
                className="blog-item-tagline"
                trigger={blogitems.tagline}
              >
              <h4>{blogitems.subheading1}</h4>
                <p className="blog-item-fulltext">{blogitems.firstparagraph}</p>
                
                <p>{blogitems.secondparagraph}</p>
                <img src={blogitems.image2} alt="" />
                <h4>{blogitems.subheading2}</h4>

                <p>{blogitems.thirdparagraph}</p>
              </Collapsible>
              <img
                src={blogitems.previewimage}
                className=""
                alt={blogitems.title}
              ></img>
            </div>
          </div>
        );
      });
    } else return <h1>Loading...</h1>;

    return (
      <div className="blogtitle">
        <h1>My blog</h1>
        <div className="blogpage">{blogitems}</div>
      </div>
    );
  }
}

export default Blog;
