import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    let icon      = document.getElementById("menu-icon");
    let menuItems = document.getElementById("menu-items");

    icon.classList.toggle("open");
    icon.title = "Close the menu." === icon.title ? "Open the menu." : "Close the menu.";

    menuItems.classList.toggle("animate-left-cubic-superfast");
    menuItems.style.gridColumn = menuItems.style.gridColumn === "1 / auto" ? "3 / auto" : "1 / auto";
  }

}
