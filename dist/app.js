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
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/1.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/2.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/3.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/4.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/5.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/6.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/7.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/8.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/9.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/10.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/11.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/12.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/13.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/14.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/15.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/16.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/17.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/18.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/19.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/20.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/21.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/22.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/23.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/24.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/25.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/26.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/27.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/28.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/29.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/30.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/31.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/32.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/33.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/34.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/35.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/36.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/37.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/38.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/39.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/40.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/41.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/42.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/43.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/44.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/45.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/46.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/47.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/48.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/49.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/50.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/51.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/52.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/53.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/54.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/55.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/56.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/57.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/58.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/59.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/60.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/61.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/62.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/63.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/64.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/65.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/66.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/67.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/68.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/69.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/70.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/71.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/72.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/73.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/74.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/75.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/76.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/77.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/78.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/79.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/80.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/81.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/82.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/83.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/84.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/85.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/86.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/87.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/88.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/89.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/90.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/91.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/92.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/93.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/94.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/95.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/96.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/97.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/98.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/99.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/100.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/101.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/102.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/103.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/104.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/105.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/106.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/107.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/108.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/109.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/110.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/111.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/112.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/113.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/114.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/115.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/116.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/117.webp",
    "https://res.cloudinary.com/samaxy50/image/upload/v1734579069/118.webp",
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
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579122/tab1.png",
  },
  tab2: {
    title: "Payroll",
    description:
      "Automate everything payroll-related, from employee payments to pension and HMRC submissions. Integrates directly with the HR software including hours worked and holidays and make recording benefits a breeze, whether you payroll benefits or submit P11Ds.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579123/tab2.png",
  },
  tab3: {
    title: "Benefits",
    description:
      "Manage pension and healthcare centrally. Automate the busy work of adding and removing employees. Give your team better visibility into their benefits and empower them to make choices themselves without having to worry about reconciling payroll deductions.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579122/tab1.png",
  },
  tab4: {
    title: "Payments",
    description:
      "After approving payroll and contractor invoices, make local salary and global contractor payments in one go with just a few clicks.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579123/tab2.png",
  },
  tab5: {
    title: "Time Off",
    description:
      "Request, approve and keep track of time and attendance seamlessly directly in your HR software. Whether it's holiday, sick days, work from home, parental leave or unpaid holiday. Create custom policies and assign employees by rule. Get requests directly in Slack or mobile app.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579122/tab1.png",
  },
  tab6: {
    title: "Apps",
    description:
      "Manage access to your business apps centrally. Protect your data and save time by managing employee accounts automatically when on and offboarding employees. Spot inactive users and monitor access from outside of your organisation.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579123/tab2.png",
  },
  tab7: {
    title: "Devices",
    description:
      "Embed device as a service directly into your people processes. Equip your team with a few clicks and stop wasting time on shipping, set up, collections, storage and support. Remotely configure employee computers and apply security policies to protect company IP. The better alternative to complicated MDM tools and expensive outsourcing.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579122/tab1.png",
  },
  tab8: {
    title: "Engagement",
    description:
      "Unlock the insights needed for growth. Launch surveys in a matter of minutes, directly in your HR software. Understand employee's onboarding experience, engagement over lifecycle or run regular check-ins. Turn insights into patterns and trends with Impact analysis.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579123/tab2.png",
  },
  tab9: {
    title: "Performance",
    description:
      "Empower your people to perform, grow and succeed: Elevate the performance review experience, providing both people teams and managers with a toolkit for the continuous alignment of goals, feedback, and expectations in an engaging and transparent manner.",
    link: "#",
    image:
      "https://res.cloudinary.com/samaxy50/image/upload/v1734579123/tab2.png",
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
