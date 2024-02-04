// src/auth.js

import { createAuth0Client } from '@auth0/auth0-spa-js';

const auth0Client = createAuth0Client({
  domain: 'YOUR_AUTH0_DOMAIN',
  client_id: 'YOUR_AUTH0_CLIENT_ID',
  redirect_uri: window.location.origin
});

export default auth0Client;
