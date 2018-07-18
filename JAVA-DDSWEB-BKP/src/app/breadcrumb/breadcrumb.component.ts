import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from '@angular/router';
import { BreadCrumb } from './breadcrumb.model';

@Component({
  selector: 'dds-breadcrumb',
  styleUrls: ['dds-breadcrumb.component.scss'],
  templateUrl: 'dds-breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: BreadCrumb[];

  constructor(private activatedRoute: ActivatedRoute, public router: Router ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.criarRota(root);
    });
  }

  criarRota(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty('breadcrumb')) {
        return this.criarRota(child, url, breadcrumbs);
      }

      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeURL}`;

      const breadcrumb: BreadCrumb = this.addBreadcrumb(child, url);
      breadcrumbs.push(breadcrumb);
      return this.criarRota(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  addBreadcrumb(child: any, url: string): BreadCrumb {
    const breadcrumb: BreadCrumb = {
      titulo: child.snapshot.data['breadcrumb'],
      parametros  : child.snapshot.params,
      url: url
    };
    return breadcrumb;
  }

}
