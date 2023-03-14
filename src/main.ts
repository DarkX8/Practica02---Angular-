import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrls: ['./global_styles.css'],
})
export class App {
  variable_Angular: string = 'Angular';
  variable_Nombre: string = 'Darwin Cabrera';
  variable_Email: string = 'dcabrerab2@est.ups.edu.ec';
  variable_Descripcion = 'Estudiante - Universidad Politécnica Salesiana';
  variable_Edad: number = 26;
  variable_Alt_Img: string = 'Logo Google';
  variable_Img =
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png';
  codigo_Producto_01: string = 'PO988';
  nombre_Producto_01: string = 'TC';
  precio_Producto_01: number = 1009;

  coleccion_Productos = [
    {
      codigo_Producto_02: 'P001',
      nombre_Producto_02: 'TV 32"',
      precio_Producto_02: 1678,
    },

    {
      codigo_Producto_02: 'P002',
      nombre_Producto_02: 'TV 55"',
      precio_Producto_02: 1678,
    },
  ];

  agregarProducto01() {
    this.codigo_Producto_01 = this.codigo_Producto_01 + this.codigo_Producto_01;
  }

  agregarProducto02() {
    this.coleccion_Productos.push({
      codigo_Producto_02: this.codigo_Producto_01,
      nombre_Producto_02: this.nombre_Producto_01,
      precio_Producto_02: this.precio_Producto_01,
    });
  }

  /* En las buenas prácticas (Clean code) siempre es recomendable utilizar punto y coma a pesar de que no sea necesario, tambien se pueden declarar los tipos aunque no es necesario. Ejm: variable_Angular: string = 'Angular';*/

  // VERSION.major Preguntar!

  /*
  name = 'Angular UPS';
  a = 0;
  b = 13;
  direccion = 'Av 10 de agosto';

  metodoSaludar(){
      alert('Hola')
  }
  */
}

bootstrapApplication(App);
