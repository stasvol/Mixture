import React from "react";

export const ADD_CONTENT = 'ADD_CONTENT'

export const addActionContent = (artworksId) => {
    return {
        type: ADD_CONTENT,
        payload:artworksId
    }
}