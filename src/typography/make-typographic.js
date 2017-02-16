import React, { PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';

const propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
};

const defaultProps = {
  children: null,
  style: {},
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
  },
});

export default function makeTypographic({ style: baseStyle, mutator }) {
  const Typographic = ({ children, style, ...props }) => {
    let content = children;
    if (mutator) content = mutator.call(children, children);
    return <Text style={[styles.text, baseStyle, style]} {...props}>{content}</Text>;
  };
  Typographic.propTypes = propTypes;
  Typographic.defaultProps = defaultProps;


  return Typographic;
}

