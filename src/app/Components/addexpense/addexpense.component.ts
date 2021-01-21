import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expensetracker } from 'src/app/Model/expensetracker';
import { ExpenseService } from 'src/app/Service/expense.service';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  category =[
    { value: 'Automobile', text: 'Automobile'},
    { value: 'Entertainment', text: 'Entertainment'},
    { value: 'Food', text: 'Food'},
    { value: 'Health Care', text: 'Health Care'},
    { value: 'Household', text: 'Household'},
    { value: 'Personal', text: 'Personal'},
    { value: 'Travel', text: 'Travel'},
    { value: 'Utility', text: 'Utility'}
  ];


  expenses: Expensetracker[]=[];
  expense: Expensetracker = new Expensetracker();

  constructor(private _expenseService: ExpenseService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              public dialog: MatDialogRef<AddexpenseComponent>) { }

  ngOnInit(): void {
     const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    if (isIdPresent) {
       const id= +this._activatedRoute.snapshot.paramMap.get('id');
        this._expenseService.getExpense(id).subscribe(
          data => this.expense = data
        )
    }

  }

  saveExpense() {
    this._expenseService.saveExpense(this.expense).subscribe(
      data => {
        console.log('response', data);
        this.dialog.close();
      }
    )
  }
  deleteExpense(id: number) {
    this._expenseService.deleteExpense(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.saveExpense();
       this._router.navigateByUrl('/expenses');
      }
    )
  }

}


