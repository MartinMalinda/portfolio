// netlify/edge-handlers/password-protect.js

import type { Config, Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const AUTH_PASS = "lisbon"; // replace with your password

  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = atob(base64Credentials).split(':');
  const pass = credentials[1];

  if (pass !== AUTH_PASS) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return context.next();
};

export const config: Config = {
  path: ["/flow_consultancy"]
};
