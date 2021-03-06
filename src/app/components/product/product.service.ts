import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  notify (txt: string) {
    this.snackBar.open(txt, 'x',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }
}
