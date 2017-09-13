var openLink = document.querySelector(".footer-contacts a");
         var popup = document.querySelector(".modal-write");
         
         openLink.addEventListener("click", function (evt) {
             evt.preventDefault();
             popup.classList.add("modal-show");
         });
         
         var closeLink = document.querySelector(".modal-close");
         
         closeLink.addEventListener("click", function (evt) {
             evt.preventDefault();
             popup.classList.remove("modal-show");
         });