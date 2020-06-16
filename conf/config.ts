import getConfig from 'next/config';
import { AppServerSettings } from './app-settings';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const AppServerConfig: AppServerSettings = {
    ...publicRuntimeConfig
}

export const GhostApiSettings = AppServerConfig.ghost;

export default AppServerConfig;