import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Customer {
  customerNo: number;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name = "Muhaddis";
  Display = false;

  onClick() {
    this.Display = true;
  }

  getData(val: string) {
    console.warn(val);
  }

  users = ['Mike', 'Ali', 'Tom', 'Bruce'];

  customers: Customer[] = [
    { customerNo: 1, name: 'Dravid', address: 'Street no 1, Colony', city: 'Bangalore', state: 'Karnataka', country: 'India' },
    { customerNo: 2, name: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    { customerNo: 3, name: 'Sourav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { customerNo: 4, name: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { customerNo: 5, name: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' },
  ];

  filteredlist: any[] = [];

  ngOnInit() {
    this.filteredlist = [
      {
        PageName: 'Privacy Policy',
        CreationDate: '20 May 2024',
        ModifiedDate: '20 May 2024',
        active: false,
        status: 'Accepted',
      },
      {
        PageName: 'Disclaimer',
        CreationDate: '20 May 2024',
        ModifiedDate: '20 May 2024',
        active: false,
        status: 'Pending',
      },
      {
        PageName: 'Terms and Conditions',
        CreationDate: '20 May 2024',
        ModifiedDate: '20 May 2024',
        active: false,
        status: 'Rejected',
      }
    ];
  }
}
