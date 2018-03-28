import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import { BreadCrumb } from "./breadcrumb";

import * as screenfull from 'screenfull';

@Component({
  selector: "dds-breadcrumb",
  styleUrls: ['dds-breadcrumb.component.scss'],
  templateUrl: 'dds-breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: BreadCrumb[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.criarRota(root);
    });
  }
  
  toggleFullScreen(){
    if (screenfull.enabled) {
      screenfull.toggle();
  }
  }

  private criarRota(route: ActivatedRoute, url: string = "", breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty("breadcrumb")) {
        return this.criarRota(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      url += `/${routeURL}`;

      let breadcrumb : BreadCrumb =this.addBreadcrumb(child, url);
      breadcrumbs.push(breadcrumb);
      return this.criarRota(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  private addBreadcrumb(child: any, url: string): BreadCrumb{
    let breadcrumb: BreadCrumb = {
      titulo: child.snapshot.data["breadcrumb"],
      parametros  : child.snapshot.params,
      url: url
    };
    return breadcrumb;
  }

}
