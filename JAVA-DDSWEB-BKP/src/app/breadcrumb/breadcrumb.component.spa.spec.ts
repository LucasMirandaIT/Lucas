import { async, ComponentFixture, inject, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImportsAngularMaterialModule } from '../shared/imports-angular-material/imports-angular-material.module';

import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { BreadCrumb } from './breadcrumb.model';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let compiled: any;
  let spy: any;

  beforeEach(async(() => {}));

  afterEach(function() {});

  it('test variavel', () => {
      const breadcrumb = new BreadcrumbComponent(null, null);
      expect(breadcrumb.breadcrumbs.length).toBe(0);
  });

  it('test addBreadcrumb', () => {
    const breadcrumb = new BreadcrumbComponent(null, null);
    let child:any = {snapshot: {data: {breadcrumb: "ibpj/public-selection"},params :{}}}
    let bd = breadcrumb.addBreadcrumb(child, 'url');
    expect(bd.titulo).toBe("ibpj/public-selection");
  });

  it('test criarRota children.length === 0', () => {
    let root :any = { children: [] }
    const breadcrumb = new BreadcrumbComponent(null, null);
    
    let bd = breadcrumb.criarRota(root);
    expect(bd.length).toBe(0);
  });

  it('test criarRota child.outlet !== PRIMARY_OUTLET', () => {
    let root :any = { 
        children: [{
            snapshot: {
            data: {breadcrumb: "Menu 1"},
            params :{},
            outlet: "primaryyyyyyy"}
        }]
    }
    const breadcrumb = new BreadcrumbComponent(null, null);
    let bd = breadcrumb.criarRota(root);
    expect(bd.length).toBe(0);
  });

  it('test criarRota', () => {
    let root :any = { 
        children: [{
          snapshot: {
            data: {breadcrumb: "Menu 1"},
            params :{},
            outlet: "primary",
            url: [{path:"menu1",parameters:{}}]
          }
        }]
    }
    const breadcrumb = new BreadcrumbComponent(null, null);
    let breadcrumbs: BreadCrumb[] = []
    let bd = breadcrumb.criarRota(root);
    expect(bd.length).toBe(0);
  });

  // it('Metodo fullScreen chamando com sucesso', () => {
  //   const onFullScreen = spyOn(component, 'onFullScreen').and.callThrough();
    
    //funcionando
    // let screen = spyOn(component, 'screen').and.returnValue(true);
    // expect(screen.calls.any()).toBe(false);
    
    // let root: ActivatedRoute = this.fakeActivatedRoute.root;
    // console.log(root);
    // let bread = this.criarRota(root);
    // fixture.detectChanges();

    // expect(bread.length).toBe(0);

  // });

  // it(`should get the user List via refresh function`, fakeAsync(() => {
  //   const breadcrumb = new BreadcrumbComponent(null, null);
    
  //   let ngOnInitFn = BreadcrumbComponent.prototype.ngOnInit;
  //   BreadcrumbComponent.prototype.ngOnInit = () => {}
  //   tick();
  
  //   fixture.detectChanges(); 
  //   BreadcrumbComponent.prototype.ngOnInit = ngOnInitFn;   
  //   expect(component.breadcrumbs.length).toBe(3, 'user list after function call');
  // }));

});