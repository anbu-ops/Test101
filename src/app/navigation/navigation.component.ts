import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {

  hamburgerClick(){

    const navbarLinks = document.querySelectorAll('#navbarNav a'); // Selects all anchor tags inside #navbarNav

    console.log(navbarLinks);
    
    navbarLinks.forEach((element) => {
        (element as HTMLElement).style.display = "flex";
    });

  
  
  // toggleButton.addEventListener('click', -> () {
  //   navbarLinks.classList.toggle('active')
  // })
 }

}
