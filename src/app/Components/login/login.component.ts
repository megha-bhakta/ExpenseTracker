import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username:'',password:'',remember:false}
  constructor(public dialog:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('User:', this.user);
    this.dialog.close();
  }

}
