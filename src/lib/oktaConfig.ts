export const oktaConfig = {
    clientId: '0oafa8ken6ZndPp005d7',
    issuer: 'https://dev-89081060.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpCheck: true
}