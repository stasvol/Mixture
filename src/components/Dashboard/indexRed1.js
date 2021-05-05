import React, {Component} from "react";
import {withRouter} from "react-router";
import {NavLink} from 'react-router-dom';
import {addContentAC} from '../../redux/reducers/add_content'
import {addContentReduxer} from '../../redux/reducers/add_content'
import styles from "./styles.module.css";
import {connect} from "react-redux";
import {compose} from "redux";


class Dashboard extends Component {
    render() {
        return (
            <div className={styles['dashboard']}>
                <div>
                    <h3 className={styles['header']}>Artworks</h3>
                    {this.renderArtworksList()}
                    {/*{props.addContent()}*/}

                </div>
                {this.renderSpotLight()}
            </div>
        );
    }

         renderArtworksList = () => {

            return this.props.artworks.map(artwork => (
                <div onClick={() => this.props.addContent(artwork._id)}
                     key={artwork._id}
                    // to={`/artworks/${artwork._id}`}
                     className={ this.props.artworkId === artwork._id
                         ? styles['active-artworks-row']
                         : styles['artworks-row']}
                     // activeclassName={styles['active-artworks-row']}
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

       renderSpotLight = () => {

            const selectedArtworksId = this.props.artworkId
            // props.match.params && props.match.params.artworkId;
            if (!selectedArtworksId) {
                return null;
            }
            const artworksInSpotlight = this.props.artworks.find(
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


const mapStateToProps = (state) => {

    return {
        artworkId: state.artworkId
    }
}

const mapDispatchToProps ={

    addContent: addContentAC
}

// const mapDispatchToProps =(dispatch)=> {
//
//  return {
//         addContent:(artworkId)=>{
//          dispatch(addContentAC(artworkId))
//
//  }
// }
// }

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