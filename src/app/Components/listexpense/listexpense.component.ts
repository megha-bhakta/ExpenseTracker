import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expensetracker } from 'src/app/Model/expensetracker';
import { ExpenseService } from 'src/app/Service/expense.service';

@Component({
  selector: 'app-listexpense',
  templateUrl: './listexpense.component.html',
  styleUrls: ['./listexpense.component.css']
})
export class ListexpenseComponent implements OnInit {

  expenses: Expensetracker[]=[];
  expense: Expensetracker = new Expensetracker();
  filters = {
    keyword: '',
    sortBy: 'Name'
  }

  constructor(private _expenseService: ExpenseService,
    private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void{

    const isIdPresent = +this._activatedRoute.snapshot.paramMap.has('id');
     if (isIdPresent) {
         const id = +this._activatedRoute.snapshot.paramMap.get('id');
        this._expenseService.getExpense(id).subscribe(
          data => this.expense = data
        )
     }
      this.listExpenses();
  }



  deleteExpense(id: number) {
    this._expenseService.deleteExpense(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.listExpenses();
      }
    )
  }


  listExpenses() {
    this._expenseService.getExpenses().subscribe(
      data => this.expenses = this.filterExpenses(data)
    )
  }



  filterExpenses(expenses: Expensetracker[]){
    return expenses.filter((e) => {
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase())
    })

    }
}
