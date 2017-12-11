import $ from 'jquery'
import MobileMenu from './modules/MobileMenu';
import FlavourSelection from './modules/flavourSelection';
import Testimonials from './modules/testimonials';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var flavourSelection = new FlavourSelection();
var testimonials = new Testimonials();
var revealOnScrollTesti = new RevealOnScroll($(".mySlides-Testi"),"85%");
var revealOnScrollContact = new RevealOnScroll($(".mySlides-Testi"),"85%");

