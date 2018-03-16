import {  Component,  OnInit, AfterViewInit } from '@angular/core';
import {  Router,  ActivatedRoute,  NavigationEnd,  Params,  PRIMARY_OUTLET} from '@angular/router';
import 'rxjs/add/operator/filter';

interface IBreadcrumb {  label: string;  params ? : Params;  url: string; }

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  public breadcrumbs: IBreadcrumb[];
  channelTitle;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

    //  Sobrescrever para o evento 'NavigationEnd'
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      //  Colocar breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });

  }

  ngAfterViewInit() {
    $('.btn_filter').sideNav({
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor   
    }); 
    $('select').material_select();
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

    // Obter as rotas filha
    let children: ActivatedRoute[] = route.children;

    // Retornar se não houverem mais filhas
    if (children.length === 0) {
      return breadcrumbs;
    }

    // Interagir sobre cada filha
    for (let child of children) {
      // Verificar rota primária
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //  Verificar se os dados customizados da propriedade "breadcrumb" estão especificados na rota
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      // Obter o segmento URL das Rotas
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      // Adicionar rota URL na URL
      url += `/${routeURL}`;

      // Adicionar breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      // Recursivo
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    // TODO Nós nunca devemos chegar aqui, mas... para garantir.
    return breadcrumbs;
  }

  verify(){
    return !(this.channelTitle=="Relatórios/ Consultas");
  }
}

