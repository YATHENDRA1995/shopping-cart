import { Component, OnInit } from '@angular/core';
import { HttpLayerService } from '../../../services/http-layer.service';
import { Config } from '../../../config/config';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public saleItems = [];
  public isItemDetailPage = false;
  public detailPageData;
  constructor(
    public httpLayer: HttpLayerService
  ) { }

  ngOnInit(): void {
    this.getContentDetails();
  }

  getContentDetails() {
    try {
      this.httpLayer.get(Config.LOCAL_SERVICE.mainContentData).subscribe((response) => {
        if (response.status) {
          this.saleItems = response.data.saleItemsList;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  navigateTo(data) {
    try {
      if (data === true) {
        this.detailPageData = {}
      } else {
        this.detailPageData = data;
      }
      this.isItemDetailPage = !this.isItemDetailPage;
    } catch (error) {
      console.log(error);
    }
  }

}
