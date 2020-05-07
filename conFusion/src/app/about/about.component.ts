import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';//dish object
// import{DISHES} from '../shared/dishes';//dishes data
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderService: LeaderService) { }
  
  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

  

}
