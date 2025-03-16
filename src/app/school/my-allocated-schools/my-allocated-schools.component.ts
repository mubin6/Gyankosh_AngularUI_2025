import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';
import { Report2Dto, ResponseDto } from 'src/app/types';

@Component({
  selector: 'app-my-allocated-schools',
  templateUrl: './my-allocated-schools.component.html',
  styleUrls: ['./my-allocated-schools.component.scss']
})
export class MyAllocatedSchoolsComponent implements OnInit {

  // table
  displayedColumns = ['id', 'schoolName', 'nextAppointment']; //'nextAppointment'
  report2DataSource: Report2Dto[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getReport2()
  }

  getReport2() {
    this.spinner.show()
    const loggedInUserDetails = JSON.parse(this.loginService.getUserDetails());
    this.loginService.getReport2(loggedInUserDetails.id).subscribe((resp: ResponseDto<any>) => {
      this.report2DataSource = resp.message;
      this.spinner.hide()
    })
  }

  openSchoolDetails(user: any) {
    const link = `/school-details/${user?.id}`;
    window.open(link, '_blank');
  }


}
