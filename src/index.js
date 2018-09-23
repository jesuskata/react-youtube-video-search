// Dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Youtube API
const API_KEY = 'AIzaSyDjJhtbQbU4ory41H_dzWxbaPBIzRdxXa0';

// Crearemos un nuevo componente. Este componente producirá html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // this.setState({ videos: videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Tomaremos el componente que generó html, y lo pondremos en
//  la página (en el DOM)
ReactDOM.render(<App />, document.querySelector('.container'));