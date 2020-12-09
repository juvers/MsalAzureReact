export const msalConfig = {
    authority: 'https://login.microsoftonline.com/common',
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: document.getElementById('root').baseURI
};

// console.log("Inside client id: ", process.env.REACT_APP_CLIENT_ID);
// console.log("Inside process env: ", process.env.NODE_ENV)