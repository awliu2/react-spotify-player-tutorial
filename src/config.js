export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "6a9d46a0e3334ef29711b6cb7aaef920";
export const redirectUri = "http://localhost:3000/redirect";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];