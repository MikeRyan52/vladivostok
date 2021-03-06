import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/toPromise';
export function resolve(resolver, state) {
    return resolveNode(resolver, state._root).map(_ => state);
}
function resolveNode(resolver, node) {
    if (node.children.length === 0) {
        return fromPromise(resolver.resolveComponent(node.value.component).then(factory => {
            node.value._resolvedComponentFactory = factory;
            return node.value;
        }));
    }
    else {
        const c = node.children.map(c => resolveNode(resolver, c).toPromise());
        return forkJoin(c).map(_ => resolver.resolveComponent(node.value.component).then(factory => {
            node.value._resolvedComponentFactory = factory;
            return node.value;
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvbHZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUlPLHVCQUF1QjtPQUN2QixFQUFDLFFBQVEsRUFBQyxNQUFNLDBCQUEwQjtPQUMxQyxFQUFDLFdBQVcsRUFBQyxNQUFNLDZCQUE2QjtPQUNoRCw2QkFBNkI7QUFFcEMsd0JBQXdCLFFBQTJCLEVBQUUsS0FBMEI7SUFDN0UsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELHFCQUFxQixRQUEyQixFQUFFLElBQXNDO0lBQ3RGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLE9BQU8sQ0FBQztZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLGdCQUFnQixDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxPQUFPLENBQUM7WUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJy4vcm91dGVyX3N0YXRlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi91dGlscy90cmVlJztcbmltcG9ydCB7IENvbXBvbmVudFJlc29sdmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7Zm9ya0pvaW59IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mb3JrSm9pbic7XG5pbXBvcnQge2Zyb21Qcm9taXNlfSBmcm9tICdyeGpzL29ic2VydmFibGUvZnJvbVByb21pc2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShyZXNvbHZlcjogQ29tcG9uZW50UmVzb2x2ZXIsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxSb3V0ZXJTdGF0ZVNuYXBzaG90PiB7XG4gIHJldHVybiByZXNvbHZlTm9kZShyZXNvbHZlciwgc3RhdGUuX3Jvb3QpLm1hcChfID0+IHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU5vZGUocmVzb2x2ZXI6IENvbXBvbmVudFJlc29sdmVyLCBub2RlOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90Pik6IE9ic2VydmFibGU8YW55PiB7XG4gIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmcm9tUHJvbWlzZShyZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50KDxhbnk+bm9kZS52YWx1ZS5jb21wb25lbnQpLnRoZW4oZmFjdG9yeSA9PiB7XG4gICAgICBub2RlLnZhbHVlLl9yZXNvbHZlZENvbXBvbmVudEZhY3RvcnkgPSBmYWN0b3J5O1xuICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgfSkpO1xuICAgIFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGMgPSBub2RlLmNoaWxkcmVuLm1hcChjID0+IHJlc29sdmVOb2RlKHJlc29sdmVyLCBjKS50b1Byb21pc2UoKSk7XG4gICAgcmV0dXJuIGZvcmtKb2luKGMpLm1hcChfID0+IHJlc29sdmVyLnJlc29sdmVDb21wb25lbnQoPGFueT5ub2RlLnZhbHVlLmNvbXBvbmVudCkudGhlbihmYWN0b3J5ID0+IHtcbiAgICAgIG5vZGUudmFsdWUuX3Jlc29sdmVkQ29tcG9uZW50RmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgICB9KSk7XG4gIH1cbn0iXX0=