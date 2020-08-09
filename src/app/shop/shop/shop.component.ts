import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  title = 'Shop';
  img1 = 'https://www.freepngimg.com/thumb/apple/5-png-apple-image-clipart-transparent-png-apple.png';
  img2 = 'https://www.freepngimg.com/thumb/strawberry/50-strawberry-png-images.png';
  img = this.img1;
  another = ['Music', 'Ammo', 'Engineer'];
  inputValue = '';
  isApple = true;
  currentPicture = 'клубнику';

  constructor() {}

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  changePicture() {
    if (this.isApple) {
      this.img = this.img2;
      this.currentPicture = 'яблоко';
    } else {
      this.img = this.img1;
      this.currentPicture = 'клубнику';
    }
    this.isApple = !this.isApple;
  }

}
