import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'not-found',
    renderMode: RenderMode.Server,
    status: 404
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
