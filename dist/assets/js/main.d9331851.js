(()=>{var e={494:(e,t,s)=>{var i={"./en.png":405,"./ru.png":508};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=494},405:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/en.73ba64ee.png"},508:(e,t,s)=>{"use strict";e.exports=s.p+"assets/img/ru.14a7e887.png"}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,s),n.exports}s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.p="./",(()=>{"use strict";const e=class{constructor(e,t={}){this.el=document.querySelector(e),this.currentSlideId=1,this.options=t,this.slides=[],this.offset=0,this.#e()}#e(){this.buttonPrev=this.el.querySelector(".slider__button_prev"),this.buttonNext=this.el.querySelector(".slider__button_next"),this.wrapper=this.el.querySelector(".slider__wrapper"),this.el.querySelectorAll(".slider__slide").forEach(((e,t)=>{e.setAttribute("data-id",++t),this.slides.push(e)})),this.countSlides=this.slides.length,this.wrapper.style.right=0,this.move(),this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.buttonPrev.addEventListener("click",this.prev),this.buttonNext.addEventListener("click",this.next)}get currentSlide(){return this.slides.find((e=>Number(e.dataset.id)===this.currentSlideId))}move(){this.wrapper.style.right=this.offset*this.currentSlideId-this.offset}next(){this.currentSlideId=this.currentSlideId<this.countSlides?this.currentSlideId+1:1,this.offset=this.currentSlide.getBoundingClientRect().width,this.move()}prev(){this.currentSlideId=this.currentSlideId>1?this.currentSlideId-1:this.countSlides,this.offset=this.currentSlide.getBoundingClientRect().width,this.move()}},t=class{constructor(e,t){this._el=document.querySelector(e),this.selectedId=t.hasOwnProperty("selectedId")?t.selectedId:1,this._items=[],this._setup()}_setup(){this._clickHandler=this._clickHandler.bind(this),this._el.querySelectorAll("[data-type='item']").forEach((e=>(this._items.push(e),e.addEventListener("click",this._clickHandler)))),this.current.classList.add("_active")}get current(){return this._items.find((e=>Number(e.dataset.id)===this.selectedId))}_clickHandler(e){const t=e.target,s=this._clickChecker(t),{type:i}=s.dataset;"item"===i&&this.select(s)}select(e){this.current.classList.remove("_active"),this.selectedId=Number(e.dataset.id),this.current.classList.add("_active")}_clickChecker(e){let t=e;for(;!t.dataset.hasOwnProperty("type");)t=t.parentNode;return t}},i=class{constructor(e,t){this.el=document.querySelector(e),this.options=t,this.selectedId=t.selectedId,this.#t(),this.#e()}#e(){this.clickHandler=this.clickHandler.bind(this),this.el.addEventListener("click",this.clickHandler),this.value=this.el.querySelector(".dropdown__value"),this.img=this.el.querySelector(".dropdown__img").querySelector("img"),console.log(this.img)}#t(){const{items:e}=this.options;this.el.innerHTML=((e,t)=>{const i=e.find((e=>e.id===t)),r=e.map((e=>`<li class="dropdown__item" data-type="item" data-id="${e.id}" >\n    <div class="dropdown__img">\n        <img src=${s(494)(`./${e.img}`)} alt="${e.value}">\n    </div>\n    <div class="dropdown__value">${e.value}</div>\n</li>`));return`<div class="dropdown__header" data-type="trigger" data-id="${i.id}">\n        <div class="dropdown__img">\n            <img src=${s(494)(`./${i.img}`)} alt="${i.value}">\n        </div>\n        <div class="dropdown__value">${i.value}</div>\n        <svg class="dropdown__icon-arrow" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M5 5L10 0L0 0L5 5Z" fill="#2E3A59"/>\n        </svg>\n\n    </div>\n    <div class="dropdown__body">\n        <ul class="dropdown__list">\n            ${r.join("")}\n        </div>\n    </div>\n`})(e,this.selectedId)}get current(){return this.options.items.find((e=>e.id===Number(this.selectedId)))}clickHandler(e){const t=e.target,s=this.clickChecker(t),{type:i}=s.dataset;if("trigger"===i)this.toggle();else if("item"===i){const{id:e}=s.dataset;this.select(e)}}clickChecker(e){let t=e;for(;!t.dataset.hasOwnProperty("type");)t=t.parentNode;return t}select(e){this.selectedId=e;const t=this.current;this.value.innerHTML=t.value,this.img.src=s(494)(`./${t.img}`),this.close()}toggle(){this.isOpen()?this.close():this.open()}isOpen(){return this.el.classList.contains("_open")}open(){this.el.classList.add("_open")}close(){this.el.classList.remove("_open")}},r=()=>{const e=document.querySelector(".offer").querySelector(".button_border").querySelector(".bt1");document.body.clientWidth<768.98?e.innerText="Видео-ролик":e.innerText="Посмотреть видео"};window.onload=()=>{console.log("Загрузка страницы"),r(),window.addEventListener("resize",r);const s=new class{constructor(e,t){this.el=document.querySelector(e),this.options=t,this.#e()}#e(){this.burgerButton=this.el.querySelector(".menu-button"),this.burgerBody=this.el.querySelector(".menu__body"),this.clickHandler=this.clickHandler.bind(this),this.burgerButton.addEventListener("click",this.clickHandler)}scrollTo(){}get isOpen(){return this.burgerButton.classList.contains("_open")}clickHandler(){this.isOpen?this.close():this.open()}close(){this.burgerBody.classList.remove("_open"),this.burgerButton.classList.remove("_open"),document.body.classList.remove("_lock")}open(){this.burgerBody.classList.add("_open"),this.burgerButton.classList.add("_open"),document.body.classList.add("_lock")}}(".header__menu");new class{constructor(e,t){this.els=document.querySelectorAll(e),this.options=t,this.#e()}#e(){this.scrollTo=this.scrollTo.bind(this),this.els.forEach((e=>e.addEventListener("click",this.scrollTo))),this.Burger=this.options.Burger}scrollTo(e){const t=document.querySelector(e.target.dataset.scrollTo);if(console.log(t),t){const s=t.getBoundingClientRect().top;this.Burger&&this.Burger.close(),window.scrollTo({top:s,behavior:"smooth"}),e.preventDefault()}}}(".nav__link",{Burger:s}),new e(".slider",{}),new e(".reviews-slider",{}),new i(".header__language",{selectedId:1,items:[{id:1,img:"en.png",value:"En"},{id:2,img:"ru.png",value:"Ru"}]}),new i(".footer__language",{selectedId:1,items:[{id:1,img:"en.png",value:"En"},{id:2,img:"ru.png",value:"Ru"}]}),new t(".function__select-platform",{selectedId:3}),new t(".tariffs__select-platform",{selectedId:3}),new class{constructor(e,t){this.el=document.querySelector(e),this.options=t,this.multiTab=Boolean(t.multiTab),this.tabs=[],this._currentTabId=null,this._setup()}_setup(){this.el.querySelectorAll(".tab-tabs").forEach(((e,t)=>{e.dataset.id=t++;const s=e.querySelector(".tab-tabs__trigger");this._clickHandler=this._clickHandler.bind(this),s.addEventListener("click",this._clickHandler),this.tabs.push(e)}))}get currentTab(){return this.tabs.find((e=>e.dataset.id===this._currentTabId))}get isOpen(){return this.currentTab.classList.contains("_open")}_clickHandler(e){const t=this._searchTab(e.target);this.currentTab&&t!==this.currentTab&&!this.multiTab&&this.close(),this._currentTabId=t.dataset.id,this.isOpen?this.close():this.open()}_searchTab(e){let t=e.parentNode;for(;!t.dataset.id;)t=t.parentNode;return t}open(){this.currentTab.classList.add("_open")}close(){this.currentTab.classList.remove("_open")}}(".faq-tabs",{multiTab:!0})}})()})();