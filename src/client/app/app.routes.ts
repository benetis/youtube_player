import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import {YoutubeRoutes} from "./+youtube/index";

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...YoutubeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
