import React,{Component} from 'react';
import axios from 'axios';
import Spinner from "../Spinner";

class DiplayLyrics extends Component {
    state = { 
        lyrics: [],
        title: "",
        status: "",
        isLoading:true
    }
    
    componentDidMount() {
        axios.get(`https://canarado-lyrics.p.rapidapi.com/lyrics/${this.props.match.params.trackTitle}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "canarado-lyrics.p.rapidapi.com",
                "x-rapidapi-key": "2165972ce3msh0e10609e55a7807p1c4f5fjsn76f8dc6d81f0"
            }
        })
            .then(response => {
                console.log(response);
                this.setState({
                    lyrics: response.data.content[0].lyrics,
                    title: response.data.content[0].title,
                    isLoading:false
                })

            })
            .catch(err => {
                this.setState({
                    status: err,
                    isLoading:false
                })
            });
    }

    render() { 
        const { lyrics, title, status,isLoading } = this.state;
           
        if (title === undefined || lyrics === undefined || isLoading) {
            return <Spinner />
        }
        else if (status) {
            return (
                <div>
                    <div className="card card-body">
                        <h4 className="text-center">
                        <img className="mr-3"
                        src="https://img.icons8.com/ios-filled/50/000000/sad.png" />
                        No lyrics found
                        <img className="ml-3"
                        src="https://img.icons8.com/ios-filled/50/000000/sad.png" /></h4>
                    </div>
                   
                </div>

            );
        }
        else {
            return (
                <React.Fragment>
                    {console.log(status)}
                    <h3 className="text-center">{title}</h3>
                    <div className="card">                        
                        <div className = "card-body">{lyrics}</div>
                    </div>
                </React.Fragment>
            )
        }


    }
}
 
export default DiplayLyrics;