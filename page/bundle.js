(()=>{"use strict";document.querySelector(".page").addEventListener("click",(e=>{e.target.closest(".popup")&&!e.target.closest(".popup__button")||document.querySelector(".popup").classList.toggle("popup-hidden")}))})();