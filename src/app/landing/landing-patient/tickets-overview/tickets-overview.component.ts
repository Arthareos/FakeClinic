import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets-overview',
  templateUrl: './tickets-overview.component.html',
  styleUrls: ['./tickets-overview.component.less']
})

export class TicketsOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showCreator() {
    var x = document.getElementById("ticketCreator");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}