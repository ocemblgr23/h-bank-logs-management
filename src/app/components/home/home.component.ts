import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface ILogs {
  ko_code: string
  ko_name: string
  contact_no: string
  location: string
  pincode:string
  district: string
  tl_name: string
  anydesk_id: string
  error_desc: string
  create_at?: string
  update_at?: string
}

export  const API_PIN = "https://api.postalpincode.in/pincode/"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{



  logs:ILogs={
    anydesk_id: "",
    contact_no: "",
    district: "",
    error_desc: "",
    ko_code: "",
    ko_name: "",
    location: "",
    pincode:"",
    tl_name: ""
  }

  constructor(private http:HttpClient) {

  }

  ngOnInit() {

  }

  checkPincode() {
    this.http.get(`${API_PIN}${this.logs.pincode}`).subscribe((resp)=>{
      console.log(resp)
    })
  }

}
