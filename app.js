'use strict';
// Author: Joy Barua
/* Purpose: Apply JavaScript to enhance the functionality of the 
  porfolio page */
// Date (Last Modified): 03/26/2023

/**
 * add event listener on multiple elements
 */
// addEventOnElements function takes three parameters and they
// are as follows: 1.elements 2.event (example: click, mousedown) 3. a callback function
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
  
  
  
  /**
   * NAVBAR TOGGLE FOR MOBILE
   */
  
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  // toggleNavbar function manipulates the CSS styles of navigation bar
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  
  addEventOnElements(navTogglers, "click", toggleNavbar);
  
  
  
  /**
   * HEADER
   * active header when window scroll down to 100px
   */
  
  const header = document.querySelector("[data-header]");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
  
  
  
  /**
   * SCROLL REVEAL
   */
  
  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");
  
  const reveal = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
        revealElements[i].classList.add("revealed");
      }
    }
  }
  
  for (let i = 0, len = revealDelayElements.length; i < len; i++) {
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
  }
  
  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal);

/**
   * ACCORDION
   */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/**
   * TOOLTIP
*/

// selecting the elements for which we want to add a tooltip
const target = document.getElementById("tooltip-button");
const tooltip = document.getElementById("tooltip-text");

// change display to 'block' on mouseover
target.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
}, false);

// change display to 'none' on mouseleave
target.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
}, false);

/**
   * FORM SUBMISSION
   * Showing Success Message with Client's name
*/
// getValue function takes an Id as it's parameter
// and returns the specific Id's input value which is provided by the user
function getValue(controlId){
  const temp = document.getElementById( controlId);
  return temp.value;

}
// addActivity function shows a 
// successful form submission message with client’s name 
// based on a condition that all of the required input fields are filled by the user.
function addActivity(){
  
  const customerName = getValue( 'cname' );
  const customerEmail = getValue( 'cemail' );
  const customerMessage = getValue( 'cmessage' );

  if(customerName != "" && customerEmail != "" && customerMessage != ""){
    alert('Hi, '+customerName+' your message has been sent successfully');
  }  
  

}
