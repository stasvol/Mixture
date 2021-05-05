import React from "react";
import styles from "../../components/Dashboard/styles.module.css";

const ADD_CONTENT = 'ADD_CONTENT'
// import {ADD_CONTENT} from '../actions/addActionContent'

const initialState = null

export const artworkId = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CONTENT:
            return action.artworkId
        default:
            return state
    }

}
export const addContentAC = (artworkId) => ({type: ADD_CONTENT, artworkId})