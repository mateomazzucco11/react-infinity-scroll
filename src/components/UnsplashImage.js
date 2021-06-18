import React from 'react'
import '../styles/UnsplashImage.css'

export const UnsplashImage = ({url, key}) => {
    return <img src={url} key={key}/>
}
