import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-creator',
  templateUrl: './ticket-creator.component.html',
  styleUrls: ['./ticket-creator.component.less']
})
export class TicketCreatorComponent implements OnInit {

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
