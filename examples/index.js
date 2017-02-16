/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import { View } from 'react-native';

import HtmlPsalm1 from '../src/html/__stories__/psalm-1';
import ScripturePsalm1 from '../src/scripture/__stories__/psalm-1';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = props => (
  <View style={style}>
    {props.children}
  </View>
);

storiesOf('HTML Rendering')
  .add('Psalm 1', () => (
    <HtmlPsalm1 />
  ));

storiesOf('Scripture Component')
  .add('Psalm 1', () => (
    <ScripturePsalm1 />
  ));
