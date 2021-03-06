"use strict";
var router_outlet_map_1 = require('./router_outlet_map');
var url_serializer_1 = require('./url_serializer');
var router_state_1 = require('./router_state');
var router_1 = require('./router');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
function provideRouter(config) {
    return [
        common_1.Location,
        { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy },
        { provide: url_serializer_1.UrlSerializer, useClass: url_serializer_1.DefaultUrlSerializer },
        {
            provide: router_1.Router,
            useFactory: function (ref, resolver, urlSerializer, outletMap, location, injector) {
                if (ref.componentTypes.length == 0) {
                    throw new Error("Bootstrap at least one component before injecting Router.");
                }
                var componentType = ref.componentTypes[0];
                var r = new router_1.Router(componentType, resolver, urlSerializer, outletMap, location, injector);
                r.resetConfig(config);
                ref.registerDisposeListener(function () { return r.dispose(); });
                return r;
            },
            deps: [core_1.ApplicationRef, core_1.ComponentResolver, url_serializer_1.UrlSerializer, router_outlet_map_1.RouterOutletMap, common_1.Location, core_1.Injector]
        },
        router_outlet_map_1.RouterOutletMap,
        { provide: router_state_1.ActivatedRoute, useFactory: function (r) { return r.routerState.root; }, deps: [router_1.Router] },
    ];
}
exports.provideRouter = provideRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX3JvdXRlcl9wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbW9uX3JvdXRlcl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtDQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3RELCtCQUFvRCxrQkFBa0IsQ0FBQyxDQUFBO0FBQ3ZFLDZCQUErQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hELHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQUVsQyxxQkFBNEQsZUFBZSxDQUFDLENBQUE7QUFDNUUsdUJBQWlFLGlCQUFpQixDQUFDLENBQUE7QUFvQm5GLHVCQUE4QixNQUFvQjtJQUNoRCxNQUFNLENBQUM7UUFDTCxpQkFBUTtRQUNSLEVBQUMsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBQztRQUMzRCxFQUFDLE9BQU8sRUFBRSw4QkFBYSxFQUFFLFFBQVEsRUFBRSxxQ0FBb0IsRUFBQztRQUV4RDtZQUNFLE9BQU8sRUFBRSxlQUFNO1lBQ2YsVUFBVSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRO2dCQUN0RSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBQ0QsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBTSxDQUFDLEdBQUcsSUFBSSxlQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDNUYsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGNBQU0sT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7Z0JBQy9DLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBQ0QsSUFBSSxFQUFFLENBQUMscUJBQWMsRUFBRSx3QkFBaUIsRUFBRSw4QkFBYSxFQUFFLG1DQUFlLEVBQUUsaUJBQVEsRUFBRSxlQUFRLENBQUM7U0FDOUY7UUFFRCxtQ0FBZTtRQUNmLEVBQUMsT0FBTyxFQUFFLDZCQUFjLEVBQUUsVUFBVSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQWxCLENBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBTSxDQUFDLEVBQUM7S0FDakYsQ0FBQztBQUNKLENBQUM7QUF4QmUscUJBQWEsZ0JBd0I1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyT3V0bGV0TWFwIH0gZnJvbSAnLi9yb3V0ZXJfb3V0bGV0X21hcCc7XG5pbXBvcnQgeyBVcmxTZXJpYWxpemVyLCBEZWZhdWx0VXJsU2VyaWFsaXplciB9IGZyb20gJy4vdXJsX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICcuL3JvdXRlcl9zdGF0ZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBDb21wb25lbnRSZXNvbHZlciwgQXBwbGljYXRpb25SZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEEgbGlzdCBvZiB7QGxpbmsgUHJvdmlkZXJ9cy4gVG8gdXNlIHRoZSByb3V0ZXIsIHlvdSBtdXN0IGFkZCB0aGlzIHRvIHlvdXIgYXBwbGljYXRpb24uXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqIEBDb21wb25lbnQoe2RpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU119KVxuICogY2xhc3MgQXBwQ21wIHtcbiAqICAgLy8gLi4uXG4gKiB9XG4gKlxuICogY29uc3Qgcm91dGVyID0gW1xuICogICB7cGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lfVxuICogXTtcbiAqXG4gKiBib290c3RyYXAoQXBwQ21wLCBbcHJvdmlkZVJvdXRlcihyb3V0ZXIpXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWcpOmFueVtdIHtcbiAgcmV0dXJuIFtcbiAgICBMb2NhdGlvbixcbiAgICB7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5fSxcbiAgICB7cHJvdmlkZTogVXJsU2VyaWFsaXplciwgdXNlQ2xhc3M6IERlZmF1bHRVcmxTZXJpYWxpemVyfSxcblxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJvdXRlcixcbiAgICAgIHVzZUZhY3Rvcnk6IChyZWYsIHJlc29sdmVyLCB1cmxTZXJpYWxpemVyLCBvdXRsZXRNYXAsIGxvY2F0aW9uLCBpbmplY3RvcikgPT4ge1xuICAgICAgICBpZiAocmVmLmNvbXBvbmVudFR5cGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwIGF0IGxlYXN0IG9uZSBjb21wb25lbnQgYmVmb3JlIGluamVjdGluZyBSb3V0ZXIuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSByZWYuY29tcG9uZW50VHlwZXNbMF07XG4gICAgICAgIGNvbnN0IHIgPSBuZXcgUm91dGVyKGNvbXBvbmVudFR5cGUsIHJlc29sdmVyLCB1cmxTZXJpYWxpemVyLCBvdXRsZXRNYXAsIGxvY2F0aW9uLCBpbmplY3Rvcik7XG4gICAgICAgIHIucmVzZXRDb25maWcoY29uZmlnKTtcbiAgICAgICAgcmVmLnJlZ2lzdGVyRGlzcG9zZUxpc3RlbmVyKCgpID0+IHIuZGlzcG9zZSgpKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9LFxuICAgICAgZGVwczogW0FwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRSZXNvbHZlciwgVXJsU2VyaWFsaXplciwgUm91dGVyT3V0bGV0TWFwLCBMb2NhdGlvbiwgSW5qZWN0b3JdXG4gICAgfSxcblxuICAgIFJvdXRlck91dGxldE1hcCxcbiAgICB7cHJvdmlkZTogQWN0aXZhdGVkUm91dGUsIHVzZUZhY3Rvcnk6IChyKSA9PiByLnJvdXRlclN0YXRlLnJvb3QsIGRlcHM6IFtSb3V0ZXJdfSxcbiAgXTtcbn1cbiJdfQ==