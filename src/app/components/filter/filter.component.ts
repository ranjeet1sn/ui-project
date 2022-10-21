import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  selectedDate: Date = new Date();
  searchFilter: string = '';
  @Output() filterKey: EventEmitter<string> = new EventEmitter();
  @Output() filterList: EventEmitter<any> = new EventEmitter();
  @Input() status: string[] = [];
  @Input() fromList: string[] = [];
  @Input() selectedView: string = '';
  selectedStatus: string = '';
  selectedFrom: string = '';
  constructor(private commonService: CommonService) {}

  onSearch() {
    this.filterKey.emit(this.searchFilter);
  }

  exportData() {
    this.commonService.exportExcel();
  }

  onfilterList(event: any, key: string) {
    console.log(event)
    this.filterList.emit({ value: event.value, key });
  }
}
