export interface AppServerSettings {
    ghost: GhostApiSettings;
}

export interface GhostApiSettings {
    url: string;
    key: string;
    version: string;
}