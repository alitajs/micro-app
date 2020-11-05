// @ts-nocheck
import { ApplyPluginsType } from '/Users/xiaohuoni/Desktop/micro-demo/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/xiaohuoni/Desktop/micro-demo/src/.umi/alita-layout/AlitaLayout.tsx').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.tsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
