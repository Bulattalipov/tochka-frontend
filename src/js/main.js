// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import Accordions from './modules/Accordions';
import toggleMenu from './modules/toggleMenu';
import choicesSelector from './modules/choices-select';
import validation from './modules/validation';
import phoneMask from './modules/inputMask';
import headerScroll from './modules/headerScroll';
import fixedMenu from './modules/fixedMenu';
import imagesSwiper from './modules/imagesSwiper';
import infinitySlider from './modules/infinitySlider';
import projectsSliders from './modules/projectsSliders';
import showHideBlock from './modules/showHideBlock';
import tabsProgress from './modules/tabsProgress';
import sliderWithScrollbar from './modules/sliderWithScrollbar';
import hideListMore from './modules/hideListMore';
import sliderDesc from './modules/sliderDesc';
import tabsContacts from './modules/tabsContacts';
import tabsSlider from './modules/tabsSlider';
import customSelect from './modules/customSelect';
import menuTabs from './modules/menuTabs';
import loadingPage from './modules/loadingPage';
import parallaxEffect from './modules/parallaxEffect';
import tabIndex from './modules/tabIndex';
import onFocusInputFile from './modules/onFocusInputFile';
import stickyMenu from './modules/stickyMenu';
import autoHeightBlock from './modules/autoHeightBlock';
import textHeightAlignment2 from './modules/text-height-alignment-2';
import textHeightAlignment3 from './modules/text-height-alignment-3';
import textHeightAlignment4 from './modules/text-height-alignment-4';
import jsMainIntro from './modules/js-main-intro';
import textHeightAlignment5 from './modules/text-height-alignment-5';
import tabsSliderLadder from './modules/tabsSliderLadder';
import deletingInvalidData, {
  deletingInvalidDataPhone
} from './modules/deleting-invalid-data';
import hoverStagesLadder from './modules/hover-stages-ladder';
import removingSpacesFromInputs from './modules/removing-spaces-from-inputs';
import hidingButtonBenefits, {
  hidingButtonBenefitsDigits,
  hidingButtonLogos
} from './modules/hiding-button-benefits';
import {
  Modal
} from './modules/Modal';
import resetInputFile from './modules/resetInputFile';

documenReady(() => {
  window.tochka_API = {};
  removingSpacesFromInputs();
  lazyIMages();
  initModal();
  accordions();
  toggleMenu();
  choicesSelector();
  phoneMask();
  validation();
  headerScroll();
  fixedMenu();
  imagesSwiper();
  infinitySlider();
  projectsSliders();
  showHideBlock();
  tabsProgress();
  sliderWithScrollbar();
  hideListMore();
  sliderDesc();
  tabsContacts();
  tabsSlider();
  customSelect();
  menuTabs();
  loadingPage();
  parallaxEffect();
  tabIndex();
  onFocusInputFile();
  stickyMenu();
  autoHeightBlock();
  textHeightAlignment2();
  textHeightAlignment3();
  textHeightAlignment4();
  accordionsPage();
  accordionsBenefits();
  accordionsStagesModels();
  accordionsStagesPile();
  accordionsAccordionSimple();
  jsMainIntro();
  textHeightAlignment5();
  tabsSliderLadder();
  deletingInvalidData();
  deletingInvalidDataPhone();
  hoverStagesLadder();
  hidingButtonBenefits();
  hidingButtonBenefitsDigits();
  hidingButtonLogos();
  resetInputFile();

  window.tochka_API.textHeightAlignment5 = textHeightAlignment5;
});

// window.addEventListener("unload", function() {
//   hideListMore();
// });

function accordions() {

  if (!document.querySelector(".js-menu-accordions")) return;

  new Accordions({
    selectors: {
      container: '.js-menu-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn1',
      content: '.js-accordion-content'
    }
  });
}

function accordionsPage() {

  if (!document.querySelector(".js-accordions")) return;

  new Accordions({
    selectors: {
      container: '.js-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}

function accordionsBenefits() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    if (!document.querySelector(".js-accordions-benefits")) return;

    new Accordions({
      selectors: {
        container: '.js-accordions-benefits',
        wrapper: '.js-accordion',
        button: '.js-accordion-btn',
        content: '.js-accordion-content'
      }
    });
  }
}

function accordionsStagesModels() {
  if (window.matchMedia('(max-width: 991px)').matches) {
    if (!document.querySelector(".js-accordions-stages-models")) return;

    new Accordions({
      selectors: {
        container: '.js-accordions-stages-models',
        wrapper: '.js-accordion',
        button: '.js-accordion-btn',
        content: '.js-accordion-content'
      }
    });
  }
}


function accordionsStagesPile() {
  if (window.matchMedia('(max-width: 991px)').matches) {
    if (!document.querySelector(".js-accordions-stages-pile")) return;

    new Accordions({
      selectors: {
        container: '.js-accordions-stages-pile',
        wrapper: '.js-accordion',
        button: '.js-accordion-btn-pile',
        content: '.js-accordion-content'
      }
    });
  }
}

function accordionsAccordionSimple() {
  if (!document.querySelector(".js-accordions-accordion-simple")) return;

  new Accordions({
    selectors: {
      container: '.js-accordions-accordion-simple',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn-simple',
      content: '.js-accordion-content-simple'
    }
  });
}
