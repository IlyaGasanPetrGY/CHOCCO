
$(document).ready(function () {
    
    $(".rewiews__swichers__link").on("click", e =>{
      e.preventDefault();
      
      
      const $this = $(e.currentTarget)
      const curItem = $($this.closest(".rewiews__swichers__item"))
      const target = $this.attr("data-open")
        document.querySelectorAll(".reviews__display-inner").forEach(e => {
            if (e.getAttribute("data-linked-with") == target){
                let itemtoShow = $(e);
                itemtoShow.addClass("reviews__display-inner--active").siblings().removeClass("reviews__display-inner--active")
            }
        })
     
      curItem.addClass("active").siblings().removeClass("active")
    })
    $(".team__title").on("click", e => {
      e.preventDefault();
      let next = $(e.currentTarget).next();
      next.slideToggle(200, "linear");
      console.log (next)
    })
});