import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

class Footer extends Component {
    render() {
        return (
            
            <footer class="page-footer font-small unique-color-dark pt-4 bottom">
< link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
  <div class="container">

    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1">Register as a Musician</h5>
      </li>
      <li class="list-inline-item">
        <a href="/#/musician" class="btn btn-outline-white btn-rounded">Sign up!</a>
      </li>
    </ul>

    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-dribbble"> </i>
        </a>
      </li>
    </ul>

    

  </div>

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.dansljardin.ch/"> Dansljardin.ch</a>
    <a href="/#/login" style={{marginLeft: "20px"}}>Admin Login</a>
  </div>

</footer>
        );
    }
}

export default Footer;