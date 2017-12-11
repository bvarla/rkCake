import $ from 'jquery'
import MobileMenu from './modules/MobileMenu';
import FlavourSelection from './modules/flavourSelection';
import Testimonials from './modules/testimonials';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/SticyHeader';
import ImageGallery from './modules/imageGallery';

var mobileMenu = new MobileMenu();
var flavourSelection = new FlavourSelection();
var testimonials = new Testimonials();
var revealOnScrollTesti = new RevealOnScroll($(".mySlides-Testi"),"85%");
var revealOnScrollContact = new RevealOnScroll($(".mySlides-Testi"),"85%");
var stickyHeader = new StickyHeader();
var imageGallery = new ImageGallery();


