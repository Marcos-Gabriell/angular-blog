import { Component,Input,OnInit  } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {


  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= "teste"
  @Input()
  cardDescription:string =""

  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }
}
