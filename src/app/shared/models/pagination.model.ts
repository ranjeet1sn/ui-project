export interface paginationInterface {
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export class pagination implements paginationInterface {
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages = 0;
  constructor(data?: paginationInterface) {
    Object.assign(this, data);
  }
}
