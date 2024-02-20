import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit{

  @ViewChild('myForm') myForm!: NgForm;
  msg?: string;

  constructor(private customerService: CustomerServiceService){}


  ngOnInit(): void {
   this.updatePassword;
  }
  
  updatePassword(obj: any){
    const username=obj.username;
    const currentPassword=obj.currentPassword;
    const newPassword=obj.newPassword;

    this.customerService.updateCustomerPassword(username,currentPassword,newPassword).subscribe(data=>{
      this.msg =data; 
      console.log(this.msg);
      this.myForm.resetForm();

    },error=>console.log(error))
  }

}
