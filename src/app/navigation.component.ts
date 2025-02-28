import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    template: `
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid ">   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navigation" class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav flex-column flex-md-row">
          <li class="nav-item"> <a class="nav-link fw-bold text-black" > About </a> </li>
          <li class="nav-item"> <a class="nav-link fw-bold text-black" > Skills </a> </li>
          <li class="nav-item"> <a class="nav-link fw-bold text-black" > Experience </a> </li>
          <li class="nav-item"> <a class="nav-link fw-bold text-black" > Education </a> </li>
          <li class="nav-item"> <a class="nav-link fw-bold text-black" > Contact </a> </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--<nav class="navbar">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link fw-bold custom-color2" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold custom-color2" href="#">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold custom-color2" href="#">Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold custom-color2" aria-disabled="true">Education</a>
      </li>
      <li class="nav-item">
        <a class="nav-link fw-bold custom-color2" aria-disabled="true">Contact</a>
      </li>
    </ul>
  </nav>-->
    `,
})
export class NavigationComponent{

}