import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() detailPageData;
  @Output() notifyClick: EventEmitter<any> = new EventEmitter();

  public pageData;

  constructor(
    public router: Router
  ) { 
  }

  ngOnInit(): void {
    this.pageData = JSON.parse(JSON.stringify(this.detailPageData));
  }

  navigateBack() {
    try {
      this.notifyClick.emit(true);
    } catch (error) {
      console.log(error);
    }
  }

  routeToCart() {
    try {
      this.router.navigate(['layout/cart']);
    } catch (error) {
      console.log(error);
    }
  }

}
