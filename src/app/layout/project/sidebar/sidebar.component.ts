import { Component, OnInit } from '@angular/core';
import { HttpLayerService } from '../../../services/http-layer.service';
import { Config } from '../../../config/config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sideBarData;

  constructor(
    public httpLayer: HttpLayerService
  ) { }

  ngOnInit(): void {
    this.getSideBarData();
  }

  getSideBarData() {
    try {
      this.httpLayer.get(Config.LOCAL_SERVICE.sideBarData).subscribe((response) => {
        if (response.status) {
          this.sideBarData = response.data.filters;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

}
