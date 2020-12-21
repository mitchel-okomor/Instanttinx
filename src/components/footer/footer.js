import React from 'react';
import './footer.css';

const Footer = ()=>{

    return (
        <footer class="page-footer font-small  pt-5">
        
            <div class="container text-center text-md-left">
          
              <div class="row">
          
                <hr class="clearfix w-100 d-md-none" />
                <div class="col-md-3 mx-auto">
        
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!">Contact us</a>
                    </li>
                    <li>
                      <a href="#!">Feedback</a>
                    </li>
                    <li>
                      <a href="#!">More</a>
                    </li>
                  </ul>
          
                </div>
        
                <hr class="clearfix w-100 d-md-none" />
          
                <div class="col-md-3 mx-auto">
          
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!">About Us</a>
                    </li>
                    <li>
                      <a href="./how-it-works.html">How it works</a>
                    </li>
                    <li>
                      <a href="./faq.html">FAQs</a>
                    </li>
                  </ul>
          
                </div>
          
                <hr class="clearfix w-100 d-md-none" />
          
                <div class="col-md-6 mx-auto">
          
                  <h5 class="font-weight-bold text-uppercase mt-2 mb-2">connect with us</h5>
                  <a href="#"> <i class="fa fa-twitter mr-4" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-facebook mr-4" aria-hidden="true"></i></a> 
                  <a href="#"> <i class="fa fa-linkedin mr-4" aria-hidden="true"></i></a>
         
                </div>
          
              </div>
          
            </div>
          
            <div class="footer-copyright text-center py-3 mt-4">
              <a href="#">© InstanttinX  2020</a>
            </div>
          
          </footer>
    )
}

export default Footer;