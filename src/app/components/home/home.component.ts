import {Component, OnInit} from '@angular/core';

export interface ILogs {
  ko_code: string
  ko_name: string
  contact_no: string
  location: string
  district: string
  tl_name: string
  anydesk_id: string
  error_desc: string
  create_at?: string
  update_at?: string
}



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
    tl_name: ""
  }

  ngOnInit() {

  }

}
