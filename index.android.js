import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@kadira/react-native-storybook';
import '@kadira/react-native-storybook/addons';

configure(() => {
  require('./examples'); // eslint-disable-line global-require
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('Bible', () => StorybookUI);
