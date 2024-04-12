import React, { Component } from 'react'

export default class newItem extends Component {

  render() {
    let { title, description, imgurl, newsurl, author, tim, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By: {author}</small></p>
            <p class="card-text"><small class="text-body-secondary">On: {new Date(tim).toGMTString()}</small></p>
            <span class="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-success" style={{left:'87%', zIndex:1}}>
             {source}
            </span>
            <a href={newsurl} className="btn btn-sm btn-dark" target='/_blank'>Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
