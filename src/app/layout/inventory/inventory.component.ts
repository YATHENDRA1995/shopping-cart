import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/config/config';
import { HttpLayerService } from '../../services/http-layer.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public tableData;

  constructor(
    public httpLayer: HttpLayerService
  ) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData() {
    try {
      this.httpLayer.get(Config.LOCAL_SERVICE.inventoryData).subscribe( (response) => {
        if (response.status) {
          this.tableData = response.data.table;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

}
