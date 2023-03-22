/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './globals';
import '@ethersproject/shims';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
