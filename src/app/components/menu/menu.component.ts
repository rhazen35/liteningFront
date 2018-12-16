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
    });
  }

  ngOnInit() {}

  /**
   * Toggle the menu (open and close).
   * 
   * @param event
   */
  toggleMenu(event) {

    let menuLink  = document.getElementById('menu-icon');
    let menuItems = document.getElementById("menu-items");

    menuLink.classList.toggle("open");
    menuLink.title = "Close the menu." === menuLink.title ? "Open the menu." : "Close the menu.";

    menuItems.classList.toggle("animate-left-cubic-superfast");
    menuItems.classList.toggle("menu-right-position");
  }

  /**
   * Toggle the menu active state.
   * 
   * @param event
   */
  toggleMenuActive(event) {

    let items = document.getElementsByClassName('menu-item');

    for (let i = 0; i < items.length; i++) {
      if (items[i].classList.contains('active')) {
        items[i].classList.remove('active');
        break;
      }
    }

    event.target.parentElement.classList.add('active');
  }
}
