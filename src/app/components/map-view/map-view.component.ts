import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
export interface list {
  title: string;
  status: string;
  from: string;
  to: string;
  dueDate: string;
  address: string;
  date: Date;
  lat: number;
  lng: number;
  draggable: boolean;
}
@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  title = 'task-project';
  list: list[] = [];
  searchFilter: string = '';
  status: string[] = [];
  selectedView: string = '';
  zoom: number = 8;
  tempList: list[] = [];
  // initial center position for the map
  lat: number = 23.0225;
  lng: number = 72.5714;
  fromList: string[] = [];
  icon={
    url: '../../../assets/Group 142.png',
    scaledSize: {
      width: 45,
      height: 45
    }
  }
  constructor(public commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.list = this.commonService.getList();
    this.status = this.list.map((item) => item.status);
    this.status = [...new Set(this.status)];
    this.selectedView = this.router.url.split('/')[1];
    this.fromList = [...new Set(this.list.map((item) => item.from))];
    this.tempList = this.list;
  }

  filterKey(event: string) {
    this.searchFilter = event;
  }

  filterList(event: { key: string; value: string }) {
    this.list = this.tempList;
    if (event.key !== 'date') {
      if (event.value !== '') {
        this.list = this.list.filter(
          (item: any) => item[event.key] === event.value
        );
      } else {
        this.list = this.tempList;
      }
    } else {
      this.list = this.list.filter(
        (item) =>
          item.date.getDate() === new Date(event.value).getDate() &&
          item.date.getMonth() === new Date(event.value).getMonth() &&
          item.date.getFullYear() === new Date(event.value).getFullYear()
      );
    }
  }

  clickedMarker(event: any) {
    console.log(`clicked the marker: ${Object.values(event)}`);
  }
}
