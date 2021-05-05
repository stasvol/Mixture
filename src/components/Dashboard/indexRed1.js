import React, {Component} from "react";
import {withRouter} from "react-router";
import {NavLink} from 'react-router-dom';
import {addContentAC} from '../../redux/reducers/add_content'
import {addContentReduxer} from '../../redux/reducers/add_content'
import styles from "./styles.module.css";
import {connect} from "react-redux";
import {compose} from "redux";


const Dashboard = (props) => {

    const renderArtworksList = (props) => {

        return props.artworks.map(artwork => (
            <div onClick={() => props.addContent(artwork._id)}
                 key={artwork._id}
                // to={`/artworks/${artwork._id}`}
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
            </div>
        ));
    }

    const renderSpotLight = (artworksId) => {

        const selectedArtworksId = artworksId
        // props.match.params && props.match.params.artworksId;
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
    return (
        <div className={styles['dashboard']}>
            <div>
                <h3 className={styles['header']}>Artworks</h3>
                {renderArtworksList()}
                {/*{props.addContent()}*/}

            </div>
            {renderSpotLight()}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        artworksId: state.artworkId
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addContent: (artworksId) => {
            dispatch(addContentAC(artworksId))
        }
    }
}

// const withRouterDashboard = withRouter (Dashboard)
// const containerDashboard =connect() (withRouterDashboard)

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Dashboard);

// let url = window.location.toString();
// url = url.replace(/#anchor/,'');
// window.location = url;
// АБО :
// // window.location.pathname = ''