import React, { Component } from 'react';
import './app.css';

class Profile extends Component {
    render() {
        //console.log('this.props', this.props);
        let artist = {name: '', followers:{total: ''}, images: [{url:''}], genres: []};
        //if (this.props.artist !== null) {
          //artist = this.props.artist;
        //}
        artist = this.props.artist !== null ? this.props.artist : artist;
        return (
        <div className="profile">
            <img
              alt="profile"
              className="profile-img"
              src={artist.images[0].url}
            />
            <div className="profile-info">
                <div className="profile-name">{artist.name}</div>
                <div className="profile-followers">Followers: {artist.followers.total}</div>
                <div className="profile-genres">
                    {
                      artist.genres.map((genre, key) => {
                      //add comma to end of each item in [genre]
                        genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`;
                        return (
                          <span key={key}>{genre}</span>
                        )
                      })
                    }
                </div>
            </div>
        </div>
      )
    }
}

export default Profile;
