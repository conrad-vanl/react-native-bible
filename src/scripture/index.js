import React from 'react';
import Html from '../html';
import { Text, H1, H2, H3, H4, H5 } from '../typography';

const renderWithStyles = (node, { children }) => {
  switch (true) {
    case node.name === 'h3' && node.attribs.class === 'mr': return null;
    case node.name === 'p':
    case node.name === 'span':
      return <Text>{children}</Text>;
    case node.name === 'h1': return <H1>{children}</H1>;
    case node.name === 'h2': return <H2>{children}</H2>;
    case node.name === 'h3': return <H3>{children}</H3>;
    case node.name === 'h4': return <H4>{children}</H4>;
    case node.name === 'h5': return <H5>{children}</H5>;
    default: return undefined;
  }
};

export default function Scripture({ children }) {
  return (
    <Html renderer={renderWithStyles}>
      {children}
    </Html>
  );
}

Scripture.propTypes = {
  children: Html.propTypes.children.isRequired,
};
