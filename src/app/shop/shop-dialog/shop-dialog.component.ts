import {Component} from '@angular/core';

@Component({
  selector: 'app-shop-dialog',
  templateUrl: './shop-dialog.component.html',
  styleUrls: ['./shop-dialog.component.scss']
})
export class ShopDialogComponent {

  /** Заголовок диалога магазина */
  title = "Диалог магазина"

  /** Флаг видимости диалога магазина */
  dialogIsVisible: boolean = false;

  constructor() { }

  /** Отобразить диалог магазина */
  showDialog(): void {
    this.dialogIsVisible = true;
  }

}
