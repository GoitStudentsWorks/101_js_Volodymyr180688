import{a as g,S as p,i as E}from"./assets/vendor-774547bf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();async function S(){const o="https://portfolio-js.b.goit.study/api/reviews";try{const r=await g.get(o);if(r.status===200)return r.data.map(({_id:s,author:d,avatar_url:L,review:b})=>({author:d,avatar_url:L,review:b}));throw new Error("Server responded with status:",r.status)}catch(r){throw console.error("There was a problem with the request:",r),r}}async function q(e,t){const n="https://portfolio-js.b.goit.study/api/requests";try{const s=await g.post(n,{email:e,comment:t});if(s.status===201)return s.data;throw new Error("Server responded with status:",s.status)}catch(s){throw console.error("There was a problem with the request:",s),s}}const l=document.querySelector("#myModal"),x=document.querySelector("#myBtn"),A=document.querySelector(".close"),k=document.querySelector(".modal-content");x.onclick=function(){l.style.display="block"};A.onclick=function(){l.style.display="none"};document.onclick=function(e){e.target===l&&(l.style.display="none")};document.addEventListener("keydown",B);function B(e){(e.key==="Escape"||e.key==="Esc")&&(l.style.display="none")}k.addEventListener("click",T);function T(e){e.currentTarget&&(l.style.display="none")}const C=document.querySelector(".menu"),I=document.querySelectorAll(".menu-list"),i=document.querySelector(".hidden-menu");C.addEventListener("click",P);function P(e){i.classList.contains("hidden-menu")?(i.classList.remove("hidden-menu"),i.classList.add("visible-menu")):(i.classList.remove("visible-menu"),i.classList.add("hidden-menu")),e.stopPropagation()}I.forEach(e=>{e.addEventListener("click",H)});function H(e){i.classList.remove("visible-menu"),i.classList.add("hidden-menu"),e.stopPropagation()}document.addEventListener("click",$);function $(){i.classList.remove("visible-menu"),i.classList.add("hidden-menu")}const f=document.querySelectorAll(".about-me-title"),O=document.querySelectorAll(".accordion-open-about-me");f.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector("#"+e.getAttribute("data-tab"));t.classList.contains("active")?(t.classList.remove("active"),t.classList.add("accordion-open-about-me"),t.style.maxHeight=0):(O.forEach(o=>{o.classList.remove("active"),o.style.maxHeight=0}),f.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")})});const N=document.querySelector(".about-button-wrapper");new p(".swiper-container",{navigation:{nextEl:N,mousewheel:!0},loop:!0,direction:"horizontal",watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:"auto",on:{slideChangeTransitionEnd:function(){var e=document.querySelectorAll(".swiper-item");e.forEach(function(r){r.classList.remove("active")});var t=this.activeIndex,o=e[t];o.classList.add("active")}}});const v=new p(".swiper",{navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},spaceBetween:30,centeredSlides:!0,slidesPerView:"auto",autoHeight:!0,on:{slideChangeTransitionEnd:function(){const e=document.querySelector(".next-btn"),t=document.querySelector(".prev-btn");v.isEnd?e.disabled=!0:e.disabled=!1,v.isBeginning?t.disabled=!0:t.disabled=!1}}}),h=document.querySelectorAll(".faq-title"),D=document.querySelectorAll(".accordion-open");h.forEach(e=>e.addEventListener("click",()=>{const t=e.children[1];t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(D.forEach(o=>{o.classList.remove("active"),o.style.maxHeight=0}),h.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));function _(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function R(e){document.querySelectorAll(".marquee__line").forEach(o=>{o.style.animationPlayState=e?"running":"paused"})}function w(){const e=document.querySelector(".covers-section"),t=_(e);R(t)}window.addEventListener("load",w);window.addEventListener("scroll",w);async function M(){try{const e=await S(),t=document.querySelector(".reviews-list"),o=e.map(r=>`
    <li class="reviews-list-item swiper-slide">
      <img class="avatar_url" src=${r.avatar_url} width="48" alt="icon user">
      <h3 class="author"> ${r.author}</h3>
      <p class="review"> ${r.review}</p>
    </li>`).join("");t.insertAdjacentHTML("beforeend",o)}catch(e){window.alert("Error fetching reviews:",e)}}M();const y=new p(".reviws-swiper",{navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},centeredSlidesPerView:!0,slidesPerView:"auto",spaceBetween:30,on:{slideChangeTransitionEnd:function(){const e=document.querySelector(".reviews-next-btn"),t=document.querySelector(".reviews-prev-btn");y.isEnd?e.disabled=!0:e.disabled=!1,y.isBeginning?t.disabled=!0:t.disabled=!1}}}),m=document.querySelector(".footer-form"),u=document.querySelector(".footer-backdrop"),V=document.querySelector(".footer-modal-response"),z=document.querySelector(".footer-modal-close-btn"),c=document.querySelector(".green-or-red-bottom-line"),U=document.querySelector("#userEmail"),a=document.querySelector(".footer-form-fields-wrapper");m.addEventListener("submit",j);u.addEventListener("click",W);z.addEventListener("click",F);document.addEventListener("keydown",K);U.addEventListener("blur",G);function Z(e){return`<h3 class="footer-modal-title">${e.title}</h3>
                  <p class="footer-modal-content">${e.message}</p>`}async function j(e){e.preventDefault();try{const t=m.elements.userEmail.value.trim(),o=m.elements.userComment.value.trim(),r=await q(t,o),n=Z(r);u.classList.add("is-open"),V.innerHTML=n,a.classList.contains("input-after-green")&&c.classList.contains("border-bottom-color-green")&&(a.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green")),e.target.reset()}catch{E.error({position:"topCenter",title:"Error",message:"❌ Something went wrong. Try again later."})}}function W(e){e.target===e.currentTarget&&u.classList.remove("is-open")}function F(e){u.classList.remove("is-open")}function K(e){e.code==="Escape"&&u.classList.remove("is-open")}function G(e){const t=e.currentTarget.value.trim();e.target.classList.contains("input-after-green")&&e.target.classList.contains("border-bottom-color-green")?(a.classList.remove("input-after-green"),c.classList.remove("border-bottom-color-green"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(a.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(a.classList.add("input-after-red"),c.classList.add("border-bottom-color-red"))):(a.classList.remove("input-after-red"),c.classList.remove("border-bottom-color-red"),t.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)?(a.classList.add("input-after-green"),c.classList.add("border-bottom-color-green")):(a.classList.add("input-after-red"),c.classList.add("border-bottom-color-red")))}
//# sourceMappingURL=commonHelpers.js.map
