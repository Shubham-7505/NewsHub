import React, { Component } from 'react'
import NewItem from './NewItem';
import Spinner from './Spinner';
export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title= `${this.capitalizefirstletter(this.props.category)}-NewsHub`;
  }
  
 capitalizefirstletter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=09fba3e3479f4be7bf740a729b57747a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
     });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=09fba3e3479f4be7bf740a729b57747a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading : false
    });
  }
  handleNextClick = async () => {
    if (this.state.page  +1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
    
    }
    else {let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=09fba3e3479f4be7bf740a729b57747a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading : false
      });}
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center">NewsHub-Top {this.capitalizefirstletter(this.props.category)} Headlines</h2>
         {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading &&this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <NewItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 56) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://images.mktw.net/im-865537/social"} newsurl={element.url} author={element.author?element.author:"Unknown"} tim={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page  +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
