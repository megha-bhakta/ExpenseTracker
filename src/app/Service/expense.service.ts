import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expensetracker } from '../Model/expensetracker';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl: string = "http://localhost:8080/api/v1/expenses";

  constructor(private _httpClient:HttpClient) { }
  getExpenses(): Observable<Expensetracker[]> {
    return this._httpClient.get<Expensetracker[]>(this.getUrl).pipe(
      map(response => response)
    )
  }


  saveExpense(expense: Expensetracker): Observable<Expensetracker> {
    return this._httpClient.post<Expensetracker>(this.getUrl, expense);
  }

  getExpense(id: number): Observable<Expensetracker> {
    return this._httpClient.get<Expensetracker>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
    console.log(id);
  }

  deleteExpense(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }
}

