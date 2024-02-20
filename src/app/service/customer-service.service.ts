import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

   url = 'http://localhost:8098/customer';

  constructor(private httpClient : HttpClient) { }

  signup(customer: Customer): Observable<Customer> {
    const url = `${this.url}/signup`;
    return this.httpClient.post<Customer>(url, customer);
  }

  login(username: string, password: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.url}/login`, { username, password });
  }

  getEmployee(username : string) : Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.url}/get/${username}`);
  }

  depositAmmount(username: string, amount : any) : Observable<String> {
    return this.httpClient.put<String>(`${this.url}/deposit?username=${username}&amount=${amount}`, {});

  } 

  withdrawAmmount(username: string, amount : number) : Observable<String> {
    return this.httpClient.put<String>(`${this.url}/withdraw?username=${username}&amount=${amount}`, {});
  } 

  billPaymentAmmount(username: string, amount : number, biller : string, theirRef : string, yourRef : string) : Observable<String> {
    return this.httpClient.put<String>(`${this.url}/billpayment/${username}?amount=${amount}`, {biller, theirRef, yourRef});
  }

  fundTransfer(senderUsername: string, receiverAccountNo: number, amount: number): Observable<string> {
    return this.httpClient.put<string>(`${this.url}/fundTransfer?senderUsername=${senderUsername}&receiverAccountNo=${receiverAccountNo}&amount=${amount}`, null);
  }

  getTransactionList(username: string) : Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.url}/transactions/${username}`);
  }

  
  checkUsername(username: string): Observable<boolean> {
    const url = `${this.url}/${username}`;
    return this.httpClient.get<boolean>(url);
  }
}
