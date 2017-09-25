import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from './card';
import { CardItem } from './card-item';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardItem>
        <Text>
          {props.album.title}
        </Text>
      </CardItem>

      <CardItem>
        <Text>
          {props.album.title}
        </Text>
      </CardItem>
    </Card>
  )
}

export default AlbumDetail;
