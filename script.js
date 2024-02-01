class Slide {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.items = document.querySelectorAll("#slide-items > *");
    this.active = 0;
    this.init();
  }
  activeNextItem(index) {
    this.active = index;
    this.items.forEach((item) => {
      item.classList.remove("active-next");
      item.classList.remove("active");
    });
    this.items.forEach((item) => item.classList.remove("active-prev"));
    this.items[index].classList.add("active-next");
  }
  activePrevItem(index) {
    this.active = index;
    this.items.forEach((item) => {
      item.classList.remove("active-next");
      item.classList.remove("active");
    });
    this.items.forEach((item) => item.classList.remove("active-prev"));
    this.items[index].classList.add("active-prev");
  }
  next() {
    if (this.active < this.items.length - 1) {
      this.activeNextItem(this.active + 1);
    } else {
      this.activeNextItem(0);
    }
  }
  prev() {
    if (this.active > 0) {
      this.activePrevItem(this.active - 1);
    } else {
      this.activePrevItem(this.items.length - 1);
    }
  }
  buttonEvents() {
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    next.addEventListener("click", this.next);
    prev.addEventListener("click", this.prev);
  }
  activeItem(index) {
    this.index = index;
    this.items.forEach((item) => item.classList.remove("active"));
    this.items[index].classList.add("active");
  }
  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.activeItem(0);
    this.buttonEvents();
  }
}

new Slide("slide");
