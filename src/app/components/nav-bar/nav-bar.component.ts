import { Component, OnInit } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn=false;

  constructor(private loginService: LoginService, private confirmService: NgConfirmService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  }

 logoutUser(){
  this.confirmService.showConfirm("Are you sure You want to LogOut?",
  ()=>{
    this.loginService.logout()
    location.reload()
  },
  ()=>{
    
  }
  )

 } 

}
