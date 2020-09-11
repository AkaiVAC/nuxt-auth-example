module.exports = {
  mode: 'spa',
  target: 'static',
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  router: {
    middleware: ['auth'],
  },
  auth: {
    redirect: {
      login: '/',
      callback: '/auth',
    },
    strategies: {
      aad: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            'https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize',
          token:
            'https://login.microsoftonline.com/organizations/oauth2/v2.0/token',
          userInfo: '',
          logout: '/',
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: 'offline',
        clientId: '73fbd308-666f-478d-9809-28aa8c1669db',
        codeChallengeMethod: 'S256',
        scope: ['openid', 'profile'],
        autoLogout: true,
      },
    },
    cookie: {
      options: {
        secure: true,
      },
    },
  },
};
