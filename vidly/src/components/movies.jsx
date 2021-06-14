import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {};

  render() {
    return (
      <div>
        <p>
          <strong>
            Showing {this.state.movies.length} movies in the database.
          </strong>
        </p>
      </div>
    );
  }
}

export default Movies;
