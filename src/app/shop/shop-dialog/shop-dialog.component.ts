import {Component, Input} from '@angular/core';
import {Shop} from '../../models/shop';

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

  @Input() shops: Shop[];

  constructor() { }

  /** Отобразить диалог магазина */
  showDialog(): void {
    this.dialogIsVisible = true;
  }

}
