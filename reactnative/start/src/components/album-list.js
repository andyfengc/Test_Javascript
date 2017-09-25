import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Album } from '../models/album';
import AlbumDetail  from './album-detail';

export class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('http://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => {
      this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
   return this.state.albums.map(album => <AlbumDetail key={album.id} album={album} />);
  }

  render() {
    return (
      <View>
          {this.renderAlbums()}
      </View>
    );
  }
}
