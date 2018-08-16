import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitles = [
  "신과함께-인과연",
  "공작",
  "미션임파서블6",
  "몬스터호텔3"
]

const moviesImages = [
  "http://img.movist.com/?img=/x00/05/02/23_p1.jpg",
  "http://t2.gstatic.com/images?q=tbn:ANd9GcS659J2BolyzN1_Juq4Gu9YJ5SWiOTb3SWDq5KvfWR-ChiSep33",
  "http://img.movist.com/?img=/x00/05/02/83_p1.jpg",
  "http://t3.gstatic.com/images?q=tbn:ANd9GcQC066hoa3pw4aSby_vWRzEkSPlIPHwKW3DsWqri1QAzG5kWn0d"
]

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={moviesImages[0]}/>
        <Movie title={moviesTitles[1]} poster={moviesImages[1]}/>
        <Movie title={moviesTitles[2]} poster={moviesImages[2]}/>
        <Movie title={moviesTitles[3]} poster={moviesImages[3]}/>
      </div>
    );
  }
}
*/

class App extends Component {
  //사이클 시작
  componentWillMount(){
    console.log("will mount");
    //API 작업요청
  }

  //사이클 종료
  componentDidMount(){
    this._getMovies();
      /* 테스트중 let config = {
         headers: {
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
           'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
           'Access-Control-Allow-Credentials' : 'true'
         },
      };*/
    /*  setTimeout(function(){
      console.log('hello');
    }, 1000) */
/*     setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "신과함께",
            poster:"http://img.movist.com/?img=/x00/05/02/23_p1.jpg"
          },
          {
            title: "공작",
            poster:"http://t2.gstatic.com/images?q=tbn:ANd9GcS659J2BolyzN1_Juq4Gu9YJ5SWiOTb3SWDq5KvfWR-ChiSep33"
          },
          {
            title: "미션임파서블6",
            poster:"http://img.movist.com/?img=/x00/05/02/83_p1.jpg"
          },
          {
            title: "몬스터호텔3",
            poster:"http://t3.gstatic.com/images?q=tbn:ANd9GcQC066hoa3pw4aSby_vWRzEkSPlIPHwKW3DsWqri1QAzG5kWn0d"
          },
          {
            title:"트랜스포머",
            poster:"https://upload.wikimedia.org/wikipedia/ko/e/e4/트랜스포머_영화.jpg"
          }
        ]
      })
    }, 2000)

    setTimeout(()=>{
      this.setState({
        greeting:"Hello again"
      })
    }, 2000) */
    console.log("did mount");
    //데이터처리작업
  }


  state = {
  /*  greeting: "Hello",
    movies: [
      {
        title: "신과함께",
        poster:"http://img.movist.com/?img=/x00/05/02/23_p1.jpg"
      },
      {
        title: "공작",
        poster:"http://t2.gstatic.com/images?q=tbn:ANd9GcS659J2BolyzN1_Juq4Gu9YJ5SWiOTb3SWDq5KvfWR-ChiSep33"
      },
      {
        title: "미션임파서블6",
        poster:"http://img.movist.com/?img=/x00/05/02/83_p1.jpg"
      },
      {
        title: "몬스터호텔3",
        poster:"http://t3.gstatic.com/images?q=tbn:ANd9GcQC066hoa3pw4aSby_vWRzEkSPlIPHwKW3DsWqri1QAzG5kWn0d"
      }
    ]*/
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title_english} 
                    poster={movie.large_cover_image} 
                    key={movie.id} 
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                    />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies);
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err));
  }
  //컴포넌트가 존재
  render() {
    console.log("did render");
    const{movies} = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies() :  'Loading'}
        {this.state.greeting}
      {/*
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      */}
      </div>
    );
  }
}
export default App;
