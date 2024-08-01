import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {

  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,

    };
    document.title=`NewsHUB : ${this.capitalizeFirstLetter(this.props.category)}`;


  }

  async updateNews() {
    const { category, pageSize } = this.props;
    const { page } = this.state;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1dec95d2486a44b6b5540fb832a886b5&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      () => this.updateNews()
    );
  };

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => this.updateNews()
    );
  };

  render() {
    const { articles, page, totalResults } = this.state;
    const { pageSize } = this.props;
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{ color: '#003566' }}>NewsHUB: {this.capitalizeFirstLetter(this.props.category)} Update</h2>
        {this.state.loading &&<Spinner/>}
        <div className='container  my-3 row'>
          
          {articles.map((element) => (
            <div className='col-md-4' key={element.url}>
              <NewsItem
                style={{ color: '#40A578' }}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
          
        </div>
        <div className="d-flex justify-content-between my-4">
          <button
            disabled={page <= 1}
            type="button"
            onClick={this.handlePrevClick}
            className="btn btn-sm bg-success-subtle text-success-emphasis"
          >
            &larr; Previous
          </button>
          <button
            disabled={page >= Math.ceil(totalResults / pageSize)}
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-sm bg-success-subtle text-success-emphasis"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
