import React from "react";
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <div>
          <h3 className={styles['header']}>Artworks</h3>
          {this.renderArtworksList()}
        </div>
        {this.renderSpotLight()}
      </div>
    );
  }


  renderArtworksList() {

    return this.props.artworks.map(artwork => (
      <NavLink
        key={artwork._id}
        to={`/artworks/${artwork._id}`}
        className={styles['artworks-row']}
        activeClassName={styles['active-artworks-row']}
      >
        <div
          className={styles['artworks-avatar']}
          style={{
            backgroundImage: `url(/imgs/artworks/${artwork._id}.jpg)`
          }}
        />
        <span>{`${artwork.title} `}</span>
      </NavLink>
    ));
  }

  renderSpotLight() {

    const props = this.props;
    const selectedArtworksId = props.match.params && props.match.params.artworksId;
    if (!selectedArtworksId) {
      return null;
    }
    const artworksInSpotlight = props.artworks.find(
        artworks => artworks._id === selectedArtworksId
    );
    const label = `${artworksInSpotlight.title}`;

    const imgUrl = `imgs/artworks/${artworksInSpotlight._id}.jpg`;
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

// let url = window.location.toString();
// url = url.replace(/#anchor/,'');
// window.location = url;
// АБО :
// // window.location.pathname = ''