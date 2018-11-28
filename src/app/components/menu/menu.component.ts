import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) {

    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
        
          let menuLink = document.getElementById('menu-icon');

          if (menuLink.classList.contains("open")) {
            this.toggleMenu(event);
          }
      }

      if (event instanceof NavigationEnd) {
          
      }
    });
  }

  ngOnInit() {}

  toggleMenu(event) {

    let menuLink  = document.getElementById('menu-icon');
    let menuItems = document.getElementById("menu-items");

    menuLink.classList.toggle("open");
    menuLink.title = "Close the menu." === menuLink.title ? "Open the menu." : "Close the menu.";

    menuItems.classList.toggle("animate-left-cubic-superfast");
    menuItems.style.gridColumn = menuItems.style.gridColumn === "1 / auto" ? "3 / auto" : "1 / auto";
  }

}
