import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  list = [
    {
      title: 'Work Flow:Require Location',
      status: 'Uncomplete',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      lat: 23.2225,
      lng: 72.6314,
      label: 'A',
      draggable: true,
      date: new Date(),
    },
    {
      title: 'Test Location',
      status: 'Low Risk',
      from: 'testuser@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: 'test address Cir',
      date: new Date(),
      lat: 23.5225,
      lng: 72.9414,
      label: 'B',
      draggable: true,
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Uncomplete',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: 'dummy',
      date: new Date(),
      lat: 23.1225,
      lng: 72.8414,
      label: 'B',
      draggable: true,
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      date: new Date(),
      lat: 23.0225,
      lng: 72.8414,
      label: 'B',
      draggable: true,
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      date: new Date(),
      lat: 23.6225,
      lng: 72.4014,
      label: 'C',
      draggable: true,
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      date: new Date(),
      lat: 23.1235,
      lng: 72.6114,
      label: 'C',
      draggable: true,
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      lat: 23.265,
      lng: 72.6814,
      label: 'C',
      draggable: true,
      date: new Date(new Date().setDate(15)),
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      lat: 23.1225,
      lng: 72.5314,
      label: 'A',
      draggable: true,
      date: new Date(new Date().setDate(15)),
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      lat: 23.0225,
      lng: 72.8414,
      label: 'B',
      draggable: true,
      date: new Date(new Date().setDate(15)),
    },
    {
      title: 'Work Flow:Require Location',
      status: 'Need Review',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      address: '1901 Thornridge Cir',
      date: new Date(),
      lat: 23.0225,
      lng: 72.8414,
      label: 'B',
      draggable: true,
    },
  ];
  constructor() {}

  getList() {
    return [...this.list];
  }

  exportExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.list);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'List.xlsx');
  }

  getDate(date: Date) {
    const year: any[] = [
      { name: 'January', value: 0 },
      { name: 'February', value: 1 },
      { name: 'March', value: 2 },
      { name: 'April', value: 3 },
      { name: 'May', value: 4 },
      { name: 'June', value: 5 },
      { name: 'July', value: 6 },
      { name: 'August', value: 7 },
      { name: 'September', value: 8 },
      { name: 'October', value: 9 },
      { name: 'November', value: 10 },
      { name: 'December', value: 11 },
    ];
    return date.getDate() + ' ' + year[date.getMonth()].name;
  }
}
