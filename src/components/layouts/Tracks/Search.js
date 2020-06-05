import React,{Component} from 'react';
import { Link } from "react-router-dom";
class Search extends Component {
    state = {
        trackTitle:""
    }
    
    findLyric = (e) => {
        e.preventDefault();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() { 
        return ( 
            <div className="card card-body mb-4 p-4">
                <h3 className="display-4 text-center">
                    Search Song Lyric
                            </h3>
                <form className="form-group" onSubmit={this.findLyric}>
                    <input className="form-control mb-3"
                        name="trackTitle"
                        value={this.state.trackTitle}
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="Enter the song for lyrics"
                    />
                
                    <Link to={`/lyrics/${this.state.trackTitle}`} type="submit" className="btn btn-danger btn-lg btn-block mb-5">
                        Get Lyrics
                    </Link>


                </form>
            </div>
                        
                       
         );
    }
}
 
export default Search;
 
