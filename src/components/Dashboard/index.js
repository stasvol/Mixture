import React from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <div>
          <h3 className={styles['header']}>Artists</h3>
          {this.renderArtistList()}
        </div>
        {this.renderSpotLight()}
      </div>
    );
  }

  renderArtistList() {
    return this.props.artists.map(artist => (
      <NavLink
        key={artist._id}
        to={`/artists/${artist._id}`}
        className={styles['artist-row']}
        activeClassName={styles['active-artist-row']}
      >
        <div
          className={styles['artist-avatar']}
          style={{
            backgroundImage: `url(/imgs/artists/${artist._id}.png)`
          }}
        />
        <span>{`${artist.firstName} ${artist.lastName}`}</span>
      </NavLink>
    ));
  }

  renderSpotLight() {
    const props = this.props;
    const selectedArtistId = props.match.params && props.match.params.artistId;
    if (!selectedArtistId) {
      return null;
    }
    const artistInSpotlight = props.artists.find(
      artist => artist._id === selectedArtistId
    );
    const label = `${artistInSpotlight.firstName} ${
      artistInSpotlight.lastName
    }`;
    const imgUrl = `imgs/artists/${artistInSpotlight._id}.png`;
    return (
      <div className={styles['spotlight']}>
        <div
          className={styles['spotlight-img']}
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        />
        <div className={styles['spotlight-label']}>{label}</div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
