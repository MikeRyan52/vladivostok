import { RouterConfig } from './config';
import * as common from './common_router_providers';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import {PlatformLocation} from '@angular/common';

/**
 * A list of {@link Provider}s. To use the router, you must add this to your application.
 *
 * ### Example
 *
 * ```
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * class AppCmp {
 *   // ...
 * }
 * 
 * const router = [
 *   {path: '/home', component: Home}
 * ];
 *
 * bootstrap(AppCmp, [provideRouter(router)]);
 * ```
 */
export function provideRouter(config: RouterConfig):any[] {
  return [
    {provide: PlatformLocation, useClass: BrowserPlatformLocation},
    ...common.provideRouter(config)
  ];
}
