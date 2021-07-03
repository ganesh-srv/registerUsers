import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'register-users-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] | undefined;
  dataSource: any;
  // dataSource = ELEMENT_DATA;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.homeService.getAllUsers().subscribe((res) => {
      this.dataSource = res.map((user: any) => {
        delete user._id;
        delete user.__v;
        delete user.password;
        return user;
      });
      this.displayedColumns = ['firstName', 'lastName', 'username'];
      //  res.forEach((value:any)=> delete value._id);
      //  this.dataSource =res;
      console.log("users", res, this.dataSource, this.displayedColumns)
    })
  }
}
