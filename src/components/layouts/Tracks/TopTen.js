import React from 'react';
import { Link } from 'react-router-dom';
import chevrolet from '../../../images/chevron-right.svg';
import play from '../../../images/play.svg';
const TopTen = (props) => {
    const { track } = props;
    return ( 
      
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h6 className="text-center">{track.artist_name} </h6>
                    <p className="card-text">
                        <strong><img alt="icon" src={play} />Track</strong>:{track.track_name}
                        <br />
                        <strong><img alt="icon" src={chevrolet} />Album</strong>:{track.album_name}
                    </p>
                    <Link to={`lyrics/${track.track_name}/${track.track_id}/${track.commontrack_id}`} className="btn btn-dark btn-block">
                    View Lyrics
                    </Link>
 
                    </div>
                </div>
            </div>            
        
         
     );
}
 
export default TopTen;