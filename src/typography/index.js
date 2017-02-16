import { StyleSheet } from 'react-native';
import makeTypographic from './make-typographic';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Iowan Old Style',
  },
  h1: {
    fontSize: 30,
    fontWeight: '100',
  },
  h2: {
    fontSize: 15,
    fontWeight: '300',
  },
  h3: {
    fontSize: 25,
    fontWeight: '600',
  },
  h4: {
    fontSize: 25,
    fontWeight: '400',
  },
  h5: {
    fontSize: 25,
    fontWeight: '300',
  },
});

export const Text = makeTypographic({ style: styles.text });
export const H1 = makeTypographic({ style: styles.h1 });
export const H2 = makeTypographic({ style: styles.h2 });
export const H3 = makeTypographic({ style: styles.h3 });
export const H4 = makeTypographic({ style: styles.h4 });
export const H5 = makeTypographic({ style: styles.h5 });
