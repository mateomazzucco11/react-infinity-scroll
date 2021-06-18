import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage';
import InfiniteScroll from 'react-infinite-scroll-component';

import axios from 'axios';

function App(){
  const [ images, setImages] = useState([])

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = 'https://api.unsplash.com';

    const apiKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${apiKey}&count=12`)
      .then(res => setImages([...images, ...res.data]))
  }

  return (
    <div className="App">
      <Heading />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        
        {images.map(image => (
          <UnsplashImage url={image.urls.thumb} key={image.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
