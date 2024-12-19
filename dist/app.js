gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  const imagePaths = [
    "./assets/images/canvas/1.webp",
    "./assets/images/canvas/2.webp",
    "./assets/images/canvas/3.webp",
    "./assets/images/canvas/4.webp",
    "./assets/images/canvas/5.webp",
    "./assets/images/canvas/6.webp",
    "./assets/images/canvas/7.webp",
    "./assets/images/canvas/8.webp",
    "./assets/images/canvas/9.webp",
    "./assets/images/canvas/10.webp",
    "./assets/images/canvas/11.webp",
    "./assets/images/canvas/12.webp",
    "./assets/images/canvas/13.webp",
    "./assets/images/canvas/14.webp",
    "./assets/images/canvas/15.webp",
    "./assets/images/canvas/16.webp",
    "./assets/images/canvas/17.webp",
    "./assets/images/canvas/18.webp",
    "./assets/images/canvas/19.webp",
    "./assets/images/canvas/20.webp",
    "./assets/images/canvas/21.webp",
    "./assets/images/canvas/22.webp",
    "./assets/images/canvas/23.webp",
    "./assets/images/canvas/24.webp",
    "./assets/images/canvas/25.webp",
    "./assets/images/canvas/26.webp",
    "./assets/images/canvas/27.webp",
    "./assets/images/canvas/28.webp",
    "./assets/images/canvas/29.webp",
    "./assets/images/canvas/30.webp",
    "./assets/images/canvas/31.webp",
    "./assets/images/canvas/32.webp",
    "./assets/images/canvas/33.webp",
    "./assets/images/canvas/34.webp",
    "./assets/images/canvas/35.webp",
    "./assets/images/canvas/36.webp",
    "./assets/images/canvas/37.webp",
    "./assets/images/canvas/38.webp",
    "./assets/images/canvas/39.webp",
    "./assets/images/canvas/40.webp",
    "./assets/images/canvas/41.webp",
    "./assets/images/canvas/42.webp",
    "./assets/images/canvas/43.webp",
    "./assets/images/canvas/44.webp",
    "./assets/images/canvas/45.webp",
    "./assets/images/canvas/46.webp",
    "./assets/images/canvas/47.webp",
    "./assets/images/canvas/48.webp",
    "./assets/images/canvas/49.webp",
    "./assets/images/canvas/50.webp",
    "./assets/images/canvas/51.webp",
    "./assets/images/canvas/52.webp",
    "./assets/images/canvas/53.webp",
    "./assets/images/canvas/54.webp",
    "./assets/images/canvas/55.webp",
    "./assets/images/canvas/56.webp",
    "./assets/images/canvas/57.webp",
    "./assets/images/canvas/58.webp",
    "./assets/images/canvas/59.webp",
    "./assets/images/canvas/60.webp",
    "./assets/images/canvas/61.webp",
    "./assets/images/canvas/62.webp",
    "./assets/images/canvas/63.webp",
    "./assets/images/canvas/64.webp",
    "./assets/images/canvas/65.webp",
    "./assets/images/canvas/66.webp",
    "./assets/images/canvas/67.webp",
    "./assets/images/canvas/68.webp",
    "./assets/images/canvas/69.webp",
    "./assets/images/canvas/70.webp",
    "./assets/images/canvas/71.webp",
    "./assets/images/canvas/72.webp",
    "./assets/images/canvas/73.webp",
    "./assets/images/canvas/74.webp",
    "./assets/images/canvas/75.webp",
    "./assets/images/canvas/76.webp",
    "./assets/images/canvas/77.webp",
    "./assets/images/canvas/78.webp",
    "./assets/images/canvas/79.webp",
    "./assets/images/canvas/80.webp",
    "./assets/images/canvas/81.webp",
    "./assets/images/canvas/82.webp",
    "./assets/images/canvas/83.webp",
    "./assets/images/canvas/84.webp",
    "./assets/images/canvas/85.webp",
    "./assets/images/canvas/86.webp",
    "./assets/images/canvas/87.webp",
    "./assets/images/canvas/88.webp",
    "./assets/images/canvas/89.webp",
    "./assets/images/canvas/90.webp",
    "./assets/images/canvas/91.webp",
    "./assets/images/canvas/92.webp",
    "./assets/images/canvas/93.webp",
    "./assets/images/canvas/94.webp",
    "./assets/images/canvas/95.webp",
    "./assets/images/canvas/96.webp",
    "./assets/images/canvas/97.webp",
    "./assets/images/canvas/98.webp",
    "./assets/images/canvas/99.webp",
    "./assets/images/canvas/100.webp",
    "./assets/images/canvas/101.webp",
    "./assets/images/canvas/102.webp",
    "./assets/images/canvas/103.webp",
    "./assets/images/canvas/104.webp",
    "./assets/images/canvas/105.webp",
    "./assets/images/canvas/106.webp",
    "./assets/images/canvas/107.webp",
    "./assets/images/canvas/108.webp",
    "./assets/images/canvas/109.webp",
    "./assets/images/canvas/110.webp",
    "./assets/images/canvas/111.webp",
    "./assets/images/canvas/112.webp",
    "./assets/images/canvas/113.webp",
    "./assets/images/canvas/114.webp",
    "./assets/images/canvas/115.webp",
    "./assets/images/canvas/116.webp",
    "./assets/images/canvas/117.webp",
    "./assets/images/canvas/118.webp",
  ];

  if (index >= 0 && index < imagePaths.length) {
    return imagePaths[index];
  } else {
    return null;
  }
}

const frameCount = 118;
const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#section1>canvas`,
    start: `top top`,
    end: `300% top`,
    scroller: `main`,
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  const canvas = ctx.canvas;
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#section1>canvas",
  pin: true,
  scroller: `main`,
  start: `top top`,
  end: `300% top`,
});

gsap.from("#section1 div *", {
  opacity: 0,
  scale: 0.75,
  stagger: 0.1,
  y: 100,
  duration: 0.75,
  ease: "power1.inOut",
  onComplete: () => {
    document.querySelector("main").classList.remove("h-full");
    locoScroll.update();
  },
});

gsap.to("#scroll-down", {
  opacity: 0,
  pointerEvents: "none",
  duration: 0.3,
  scrollTrigger: {
    trigger: "#scroll-down",
    scroller: "main",
    start: "top 90%",
    end: "top 85%",
    scrub: 1,
  },
});

document.querySelector("#scroll-down").addEventListener("click", () => {
  locoScroll.scrollTo(document.querySelector("#section2"));
});

// Mobile Header Popup Event
document.querySelector("#popup-open").addEventListener("click", () => {
  const popup = document.querySelector("#popup");

  // const isHidden = Object.values(popup.classList).includes("hidden");
  // if (isHidden) {
  //   popup.classList.replace("hidden", "flex");
  // } else {
  //   popup.classList.replace("flex", "hidden");
  // }

  popup.classList.toggle("hidden");
  popup.classList.toggle("block");
  document.body.classList.toggle("overflow-hidden");

  gsap.from(popup, {
    height: 0,
    duration: 0.5,
    onComplete: () => {
      popup.removeAttribute("style");
    },
  });
});
document.querySelector("#popup-close").addEventListener("click", () => {
  const popup = document.querySelector("#popup");
  gsap.to(popup, {
    height: 0,
    duration: 0.5,
    onComplete: () => {
      popup.classList.toggle("hidden");
      popup.classList.toggle("block");
      document.body.classList.toggle("overflow-hidden");
      popup.removeAttribute("style");
    },
  });
});

// Section 4 marquee animation
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap
  .to(".marquee img", {
    xPercent: -100,
    repeat: -1,
    duration: 1.5,
    ease: "linear",
  })
  .totalProgress(0.5);

locoScroll.on("scroll", (instance) => {
  if (instance.scroll.y > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? -1 : 1,
  });

  currentScroll = instance.scroll.y;
});

// Section 5 Tab Data
const tabDataSection5 = {
  tab1: {
    title: "People",
    description:
      "A next-generation HR software that contains your employee master data and integrates directly with time off, payroll, benefits, and more. Minimize time spent on admin using automation and employee self-service.",
    link: "#",
    image: "./assets/images/tab1.png",
  },
  tab2: {
    title: "Payroll",
    description:
      "Automate everything payroll-related, from employee payments to pension and HMRC submissions. Integrates directly with the HR software including hours worked and holidays and make recording benefits a breeze, whether you payroll benefits or submit P11Ds.",
    link: "#",
    image: "./assets/images/tab2.png",
  },
  tab3: {
    title: "Benefits",
    description:
      "Manage pension and healthcare centrally. Automate the busy work of adding and removing employees. Give your team better visibility into their benefits and empower them to make choices themselves without having to worry about reconciling payroll deductions.",
    link: "#",
    image: "./assets/images/tab1.png",
  },
  tab4: {
    title: "Payments",
    description:
      "After approving payroll and contractor invoices, make local salary and global contractor payments in one go with just a few clicks.",
    link: "#",
    image: "./assets/images/tab2.png",
  },
  tab5: {
    title: "Time Off",
    description:
      "Request, approve and keep track of time and attendance seamlessly directly in your HR software. Whether it's holiday, sick days, work from home, parental leave or unpaid holiday. Create custom policies and assign employees by rule. Get requests directly in Slack or mobile app.",
    link: "#",
    image: "./assets/images/tab1.png",
  },
  tab6: {
    title: "Apps",
    description:
      "Manage access to your business apps centrally. Protect your data and save time by managing employee accounts automatically when on and offboarding employees. Spot inactive users and monitor access from outside of your organisation.",
    link: "#",
    image: "./assets/images/tab2.png",
  },
  tab7: {
    title: "Devices",
    description:
      "Embed device as a service directly into your people processes. Equip your team with a few clicks and stop wasting time on shipping, set up, collections, storage and support. Remotely configure employee computers and apply security policies to protect company IP. The better alternative to complicated MDM tools and expensive outsourcing.",
    link: "#",
    image: "./assets/images/tab1.png",
  },
  tab8: {
    title: "Engagement",
    description:
      "Unlock the insights needed for growth. Launch surveys in a matter of minutes, directly in your HR software. Understand employee's onboarding experience, engagement over lifecycle or run regular check-ins. Turn insights into patterns and trends with Impact analysis.",
    link: "#",
    image: "./assets/images/tab2.png",
  },
  tab9: {
    title: "Performance",
    description:
      "Empower your people to perform, grow and succeed: Elevate the performance review experience, providing both people teams and managers with a toolkit for the continuous alignment of goals, feedback, and expectations in an engaging and transparent manner.",
    link: "#",
    image: "./assets/images/tab2.png",
  },
};

const tabTitles = document.querySelector("#tab-titles");
const tabContent = document.querySelector("#tab-content");

// Function to update the active title style
function updateActiveButtonStyle(activeButton) {
  document.querySelectorAll("#tab-titles button").forEach((button) => {
    button.classList.replace("text-black", "text-black/50");
    button
      .querySelector("span:nth-child(1)")
      .classList.replace("opacity-100", "opacity-0");
  });

  activeButton.classList.replace("text-black/50", "text-black");
  activeButton
    .querySelector("span:nth-child(1)")
    .classList.replace("opacity-0", "opacity-100");
}

// Function to update the tab content
function updateTabContent(tabKey) {
  const tab = tabDataSection5[tabKey];
  tabContent.querySelector("img").setAttribute("src", tab.image);
  tabContent.querySelector("img").setAttribute("alt", tab.title);
  tabContent.querySelector("h3").textContent = tab.title;
  tabContent.querySelector("p").textContent = tab.description;
  tabContent.querySelector("a").setAttribute("href", tab.link);
}

// Event delegation for tab titles
tabTitles.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) {
    updateActiveButtonStyle(button);
    updateTabContent(button.id);

    const tabTl = gsap.timeline();

    tabTl.from(
      "#tab-content img",
      {
        scale: 0.75,
        opacity: 0,
        duration: 0.75,
      },
      "tabAnim"
    );

    tabTl.from(
      "#tab-content div:nth-child(2) *",
      {
        y: 100,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
      },
      "tabAnim"
    );
  }
});

// Initial setup for tabs
function initializeTabs() {
  Object.keys(tabDataSection5).forEach((tabKey, index) => {
    const button = document.createElement("button");
    button.className =
      "flex items-center gap-2 text-black/50 lg:text-base text-lg lg:bg-transparent bg-orange-300 lg:rounded-none rounded-md lg:pl-0 lg:pr-0 pl-2 pr-4 lg:py-0 py-1 transition-all duration-200";
    button.id = tabKey;
    button.innerHTML = `<span class="opacity-0">●</span><span>${tabDataSection5[tabKey].title}</span>`;
    tabTitles.appendChild(button);

    if (index === 0) {
      updateActiveButtonStyle(button);
      updateTabContent(tabKey);
    }
  });
}

// Initialize tabs on page load
initializeTabs();

const tabTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5",
    scroller: "main",
    start: "top 25%",
    end: "top 25%",
  },
});

tabTl.from(
  "#tab-content img",
  {
    scale: 0.75,
    opacity: 0,
    duration: 0.75,
  },
  "tabAnim"
);

tabTl.from(
  "#tab-content div:nth-child(2) *",
  {
    y: 100,
    opacity: 0,
    duration: 0.75,
    stagger: 0.1,
  },
  "tabAnim"
);

gsap.from("#section6 h2", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  scrollTrigger: {
    trigger: "#section6",
    scroller: "main",
    start: "top 60%",
    end: "top 60%",
  },
});

gsap.from("#section6 .texts-div *", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#section6",
    scroller: "main",
    start: "top 25%",
    end: "top 25%",
  },
});

gsap.from("#section7 .texts-div *", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#section7",
    scroller: "main",
    start: "top 50%",
    end: "top 50%",
  },
});

gsap.from("#section8 .texts-div *", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#section8",
    scroller: "main",
    start: "top 50%",
    end: "top 50%",
  },
});

gsap.from("#section9 .texts-div *", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#section9",
    scroller: "main",
    start: "top 80%",
    end: "top 80%",
  },
});

gsap.from("#section9 .dd-left-div div", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#section9",
    scroller: "main",
    start: "top 80%",
    end: "top 80%",
  },
});

gsap.to(".dd-left-div", {
  y: -250,
  scrollTrigger: {
    trigger: "#section9",
    scroller: "main",
    start: "top 10%",
    end: "top -50%",
    scrub: true,
    pin: true,
  },
});

gsap.from("#section9-mobile .texts-div *", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#section9-mobile",
    scroller: "main",
    start: "top 80%",
    end: "top 80%",
  },
});

gsap.from("#section9-mobile .dd-top-div div", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#section9-mobile",
    scroller: "main",
    start: "top 80%",
    end: "top 80%",
  },
});

gsap.from("#section10 .texts-div *", {
  y: 100,
  opacity: 0,
  duration: 0.75,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#section10",
    scroller: "main",
    start: "top 50%",
    end: "top 50%",
  },
});

ScrollTrigger.refresh();
