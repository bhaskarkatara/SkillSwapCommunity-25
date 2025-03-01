const appRoutes = {
  root: { path: '/', name: 'root' },
  login: { path: '/login', name: 'login' },
  signup: { path: '/signup', name: 'signup' },
  home: { path: '/home', name: 'home' },
} as const;

export default appRoutes;
