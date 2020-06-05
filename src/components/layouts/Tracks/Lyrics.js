import React, { Component } from 'react';
import axios from 'axios';
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import Search from "./Search";
const API_KEY = "331a83a7b9af7db10dad960acfd5247f";
class Lyrics extends Component {
    state = { 
        track: {},
        lyrics: {}
    }
    
    componentDidMount() {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${API_KEY}`
            )
            .then((res) => {
               console.log(res)
                this.setState({
                    lyrics: res.data.message.body.lyrics
                })

                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${this.props.match.params.commontrack_id}&apikey=${API_KEY}`)
            })
            .then(res => {
                console.log(res);
                this.setState({
                    track:res.data.message.body.track
                })
            }

            )
            .catch((err) => console.log(err));
    }
    render() { 
        const { track, lyrics } = this.state
        if (track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0 ) {
            return <Spinner />
        } else{
            return (

                <React.Fragment>
                    <Link exact to="/" className="btn btn-primary bg-dark" > Go back</Link>
                    <Search />
                    <div className="card">
                        <h4 className="card-header font-weight-bold">{track.track_name} by {''}
                            <span className="text-secondary">{track.artist_name}</span>
                        </h4>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>
                </React.Fragment>

            );
         }

       
    }
}
 
export default Lyrics;