import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { pagination } from 'src/app/shared/models/pagination.model';
import { list } from '../map-view/map-view.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  title = 'task-project';
  list: list[] = [];
  searchFilter: string = '';
  status: string[] = [];
  selectedView: string = '';
  tempList: list[] = [];
  fromList: string[] = [];
  paginationObj = new pagination();
  constructor(public commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.list = this.commonService.getList();
    this.paginationObj.totalPages = Math.ceil(
      this.list.length / this.paginationObj.pageSize
    );
    this.status = this.list.map((item) => item.status);
    this.status = [...new Set(this.status)];
    this.selectedView = this.router.url.split('/')[1];
    this.tempList = this.list;
    this.fromList = [...new Set(this.list.map((item) => item.from))];
  }

  filterKey(event: string) {
    this.searchFilter = event;
  }
  /**
   *
   *
   * @param {{ key: string; value: string }} event
   * @memberof ListViewComponent
   */
  filterList(event: { key: string; value: any }) {
    this.list = this.tempList;
    if (event.key !== 'date') {
      this.list = this.list.filter(
        (item: any) => item[event.key] === event.value
      );
    } else {
      this.list = this.list.filter(
        (item) =>
          item.date.getDate() === new Date(event.value).getDate() &&
          item.date.getMonth() === new Date(event.value).getMonth() &&
          item.date.getFullYear() === new Date(event.value).getFullYear()
      );
    }
    this.paginationObj.totalPages = Math.ceil(
      this.list.length / this.paginationObj.pageSize
    );
    this.paginationObj.currentPage = 1;
  }
}
