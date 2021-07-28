import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Like from './Like';


class MovieRow extends Component {
    state = {
        moviesTbl: getMovies(),
    };

    handleLike(movie) {
        const moviesTbl = [...this.state.moviesTbl];
        const index = moviesTbl.indexOf(movie);
        moviesTbl[index] = { ...moviesTbl[index] };
        moviesTbl[index].isLiked = !moviesTbl[index].isLiked;
        this.setState({ moviesTbl: moviesTbl })
    }

    handleDelete(movie) {
        const movies = this.state.moviesTbl.filter(m => m._id !== movie._id);
        this.setState({ moviesTbl: movies })
    }
    render() {
        return <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {this.state.moviesTbl.map(movie => (
                    <tr key={movie._id} className="table-light">
                        <th scope="row">{movie.title}</th>
                        <td>
                            {movie.genre.name}
                        </td>
                        <td>
                            {movie.numberInStock}
                        </td>
                        <td>
                            {movie.dailyRentalRate}
                        </td>
                        <td>
                            <Like like={movie.isLiked} onClick={() => this.handleLike(movie)} />
                        </td>
                        <td>
                            <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    }


}

export default MovieRow;