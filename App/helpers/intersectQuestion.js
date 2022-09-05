export function intersectQuestion(lastIndex) {
    
    const options = {
        root: document.querySelector("#root"),
        rootMargin: "0px",
        threshold: 0.2,
      };
      const callBack = entries => {
        entries.forEach(entry => {
          const $btnSubmit = entry.target.querySelector(".btn-submit");
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            location.hash = entry.target.id;
            
            if (entry.target.id.includes(`question-${lastIndex}`)) {
              $btnSubmit.classList.add("active");
            }
          } else {
            entry.target.classList.remove("active");
            $btnSubmit.classList.remove("active");
          }
        });
      };
      let observer = new IntersectionObserver(callBack, options);
      let targets = document.querySelectorAll('[id^="question"]');
      targets.forEach(target => observer.observe(target));
}