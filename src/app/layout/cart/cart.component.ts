import { Component, OnInit } from '@angular/core';
import { HttpLayerService } from '../../services/http-layer.service';
import { Config } from '../../config/config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartRaw;
  public cartData = [];

  constructor(
    public httpLayer: HttpLayerService,
    public toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails() {
    try {
      this.httpLayer.get(Config.LOCAL_SERVICE.cartData).subscribe( (response) => {
        if (response.status) {
          this.cartRaw = response.data;
          this.cartData = response.data.cartItems;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  placeOrder() {
    try {
      this.toast.success('Order Placed Successfully', 'Success')
    } catch (error) {
      console.log(error);
    }
  }

}
