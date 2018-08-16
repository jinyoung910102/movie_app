/*import React, {Component} from 'react';*/
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*
class Movie extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired
    }
    render(){
        console.log("poster : " + this.props);
        return(
            <img src={this.props.poster} width="200px"/>
        )
    }
}*/

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p classNmae="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} width="150px" alt={alt} title={alt} className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}
Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.string.isRequired,
    synopsis:PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genres:PropTypes.string.isRequired,
}

export default Movie;