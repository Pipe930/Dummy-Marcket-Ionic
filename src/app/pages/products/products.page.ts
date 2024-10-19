import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  @ViewChild(IonInfiniteScroll)
  public scroll: IonInfiniteScroll | any;
  public activarSearhBar: boolean = false;
  public loadingState: boolean = true;

  constructor(
    private servicioProduct: ProductService,

  ) { }

  ngOnInit():void {
    this.servicioProduct.obtenerPrimerosProductos();
    this.servicioProduct.listaProductos$.subscribe(resultado => {

      console.log(resultado);
      if(this.scroll){
        this.scroll.complete();
        this.loadingState = false;
      }
    }, error => {
      console.log(error);
    })
  }

  public cargarMasElementos(){
    this.servicioProduct.obtenerMasProductos();
  }

  get servicio(){
    return this.servicioProduct;
  }

  public buscarProductos(event: Event){

    const search = event.target as HTMLInputElement;

    if(search.value){
      this.servicioProduct.buscarProductos(search.value);
    } else {
      this.servicioProduct.obtenerPrimerosProductos();
    }
  }

  public desplegarSearchBar(){
    if(this.activarSearhBar){
      this.activarSearhBar = false;
    } else {
      this.activarSearhBar = true;
    }
  }

}
