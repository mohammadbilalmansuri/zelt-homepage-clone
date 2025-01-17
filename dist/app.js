(() => {
  // Lenis & ScrollTrigger Setup
  const lenis = new Lenis();
  gsap.registerPlugin(ScrollTrigger);
  lenis.on("scroll", ScrollTrigger.update);

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Ensure scroll position is reset after refresh
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.addEventListener("unload", () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    window.scrollTo(0, 0);
  });

  // Canvas Setup
  let canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  const setCanvasSize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  setCanvasSize();

  const imagesUrls = Array.from(
    { length: 118 },
    (_, i) =>
      `https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256335/zelt/images/canvas/${String(
        i + 1
      )}.webp`
  );

  const images = new Map();
  const firstImage = new Image();
  firstImage.src = imagesUrls[0];
  firstImage.onload = function () {
    images.set(0, firstImage);
    requestAnimationFrame(render);
  };

  imagesUrls.slice(1).forEach((imageUrl, index) => {
    const img = new Image();
    img.src = imageUrl;
    images.set(index + 1, img);
  });

  const imageSeq = { frame: 0 };

  function render() {
    const img = images.get(imageSeq.frame) || firstImage;
    img && drawImageOnCanvas(img, context);
  }

  function drawImageOnCanvas(img, ctx) {
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

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Resize Observer
  let lastWidth = window.innerWidth;
  new ResizeObserver(
    debounce(() => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        setCanvasSize();
        render();
        ScrollTrigger.refresh();
      }
    }, 100)
  ).observe(document.body);

  // Canvas animation
  gsap.to(imageSeq, {
    frame: images.size - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#hero canvas",
      scroller: "body",
      start: "top top",
      end: "top -300%",
      scrub: 0.1,
    },
    onUpdate: render,
  });

  ScrollTrigger.create({
    trigger: "#hero canvas",
    pin: true,
    scroller: "body",
    start: "top top",
    end: "top -300%",
  });

  // Section 1 animation
  gsap.from("#hero h1, #hero p, #hero button", {
    opacity: 0,
    scale: 0.75,
    stagger: 0.1,
    y: 100,
    duration: 0.75,
    ease: "power1.inOut",
  });

  gsap.from("#hero canvas", {
    y: 100,
    opacity: 0,
    duration: 0.75,
    ease: "power1.inOut",
  });

  gsap.to("#scroll-down", {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.3,
    scrollTrigger: {
      trigger: "#scroll-down",
      scroller: "body",
      start: "top 90%",
      end: "top 85%",
      scrub: 1,
    },
  });

  document.querySelector("#scroll-down")?.addEventListener("click", () => {
    lenis.scrollTo(document.querySelector("#scroll-point"), {
      duration: 2,
    });
  });

  // Mobile Header Popup Event
  const popup = document.querySelector("#popup");

  function togglePopup(open) {
    if (open) {
      popup.classList.remove("hidden");
      popup.classList.add("block");
      gsap.from(popup, {
        height: 0,
        duration: 0.5,
        onComplete: () => popup.removeAttribute("style"),
      });
    } else {
      gsap.to(popup, {
        height: 0,
        duration: 0.5,
        onComplete: () => {
          popup.classList.add("hidden");
          popup.classList.remove("block");
          popup.removeAttribute("style");
        },
      });
    }
  }

  document.querySelector("#popup-open")?.addEventListener(
    "click",
    debounce(() => togglePopup(true), 200)
  );

  document.querySelector("#popup-close")?.addEventListener(
    "click",
    debounce(() => togglePopup(false), 200)
  );

  // Section 3 marquee animation
  let currentScroll = 0;
  let isScrollingDown = true;

  const tween = gsap
    .to(".marquee img", {
      xPercent: -100,
      repeat: -1,
      duration: 1.5,
      ease: "linear",
    })
    .totalProgress(0.5);

  lenis.on("scroll", ({ scroll }) => {
    isScrollingDown = scroll > currentScroll;
    gsap.to(tween, {
      timeScale: isScrollingDown ? -1 : 1,
    });
    currentScroll = scroll;
  });

  // Section 4 Tabs
  const tabsData = new Map([
    [
      1,
      {
        title: "People",
        description:
          "A next-generation HR software that contains your employee master data and integrates directly with time off, payroll, benefits, and more. Minimize time spent on admin using automation and employee self-service.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab1.webp",
      },
    ],
    [
      2,
      {
        title: "Payroll",
        description:
          "Automate everything payroll-related, from employee payments to pension and HMRC submissions. Integrates directly with the HR software including hours worked and holidays and make recording benefits a breeze, whether you payroll benefits or submit P11Ds.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab2.webp",
      },
    ],
    [
      3,
      {
        title: "Benefits",
        description:
          "Manage pension and healthcare centrally. Automate the busy work of adding and removing employees. Give your team better visibility into their benefits and empower them to make choices themselves without having to worry about reconciling payroll deductions.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab1.webp",
      },
    ],
    [
      4,
      {
        title: "Payments",
        description:
          "After approving payroll and contractor invoices, make local salary and global contractor payments in one go with just a few clicks.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab2.webp",
      },
    ],
    [
      5,
      {
        title: "Time Off",
        description:
          "Request, approve and keep track of time and attendance seamlessly directly in your HR software. Whether it's holiday, sick days, work from home, parental leave or unpaid holiday. Create custom policies and assign employees by rule. Get requests directly in Slack or mobile app.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab1.webp",
      },
    ],
    [
      6,
      {
        title: "Apps",
        description:
          "Manage access to your business apps centrally. Protect your data and save time by managing employee accounts automatically when on and offboarding employees. Spot inactive users and monitor access from outside of your organisation.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab2.webp",
      },
    ],
    [
      7,
      {
        title: "Devices",
        description:
          "Embed device as a service directly into your people processes. Equip your team with a few clicks and stop wasting time on shipping, set up, collections, storage and support. Remotely configure employee computers and apply security policies to protect company IP. The better alternative to complicated MDM tools and expensive outsourcing.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab1.webp",
      },
    ],
    [
      8,
      {
        title: "Engagement",
        description:
          "Unlock the insights needed for growth. Launch surveys in a matter of minutes, directly in your HR software. Understand employee's onboarding experience, engagement over lifecycle or run regular check-ins. Turn insights into patterns and trends with Impact analysis.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab2.webp",
      },
    ],
    [
      9,
      {
        title: "Performance",
        description:
          "Empower your people to perform, grow and succeed: Elevate the performance review experience, providing both people teams and managers with a toolkit for the continuous alignment of goals, feedback, and expectations in an engaging and transparent manner.",
        link: "#",
        image:
          "https://res.cloudinary.com/mohammadbilalmansuri/image/upload/v1737256317/zelt/images/tab1.webp",
      },
    ],
  ]);

  const tabTitles = document.getElementById("tab-titles");
  const tabContent = document.getElementById("tab-content");

  function updateActiveButtonStyle(activeButton) {
    tabTitles
      .querySelectorAll("button")
      .forEach((button) => button.classList.remove("activeTabBtn"));

    activeButton.classList.add("activeTabBtn");
  }

  function updateTabContent(tabKey) {
    const tab = tabsData.get(tabKey);
    if (!tab) return;

    tabContent.innerHTML = `
    <div class="sm:w-[45%] flex flex-col justify-center items-center">
      <img src="${tab.image}" alt="${tab.title}" class="sm:w-auto xs:w-3/4">
    </div>
    <div class="sm:w-[55%] flex flex-col sm:items-start items-center sm:text-left text-center lg:gap-5 gap-3">
      <h3 class="h3">${tab.title}</h3>
      <p class="t2 text-black/60">${tab.description}</p>
      <a href="${tab.link}" class="lg:mt-2 mt-3 btn-black">Find out more</a>
    </div>
  `;
  }

  tabsData.forEach((tab, key) => {
    const button = document.createElement("button");
    button.className = "tabBtn";
    button.id = key;
    button.innerHTML = `<span class="opacity-0 lg:block hidden">●</span><span>${tab.title}</span>`;
    tabTitles.appendChild(button);
    if (key === 1) {
      updateActiveButtonStyle(button);
      updateTabContent(key);
    }
  });

  tabTitles.addEventListener(
    "click",
    debounce((event) => {
      const button = event.target.closest("button");
      if (button) {
        updateActiveButtonStyle(button);
        updateTabContent(parseInt(button.id));
        doTabAnimation();
      }
    }, 200)
  );

  function doTabAnimation(isInitial = false, triggerOn) {
    const timelineConfig = {
      onComplete: () => {
        document
          .querySelectorAll("#tab-content img, #tab-content div:last-child *")
          .forEach((el) => {
            el.removeAttribute("style");
          });
      },
    };

    if (isInitial) {
      timelineConfig.scrollTrigger = {
        trigger: "#section4",
        scroller: "body",
        start: triggerOn,
        end: triggerOn,
      };
    }

    gsap
      .timeline(timelineConfig)
      .from(
        "#tab-content img",
        {
          scale: 0.75,
          opacity: 0,
          duration: 0.75,
        },
        "tabAnim"
      )
      .from(
        "#tab-content div:last-child *",
        {
          y: 50,
          opacity: 0,
          duration: 0.75,
          stagger: 0.2,
        },
        "tabAnim"
      );
  }

  function animateWithMatchMedia(triggerOn) {
    // Section 5
    gsap.from("#people-centric .texts-div *", {
      y: 50,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#people-centric",
        scroller: "body",
        start: triggerOn,
        end: triggerOn,
      },
    });

    gsap.from("#enabling .texts-div *", {
      y: 50,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#enabling",
        scroller: "body",
        start: triggerOn,
        end: triggerOn,
      },
    });

    gsap.from("#automated .texts-div *", {
      y: 50,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#automated",
        scroller: "body",
        start: triggerOn,
        end: triggerOn,
      },
    });

    // Section 7
    gsap.from("#section7 .texts-div *", {
      y: 50,
      opacity: 0,
      duration: 0.75,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#section7",
        scroller: "body",
        start: triggerOn,
        end: triggerOn,
      },
    });
  }

  function animatePinSectionWithMatchMedia(y) {
    // Section 6 Pin
    gsap.to(".dd-left", {
      y,
      scrollTrigger: {
        trigger: "#section6",
        scroller: "body",
        start: "top 25%",
        end: "top -25%",
        scrub: true,
        pin: true,
      },
    });
  }

  const gsapmm = gsap.matchMedia();
  gsapmm.add("(min-width: 640px)", () => {
    doTabAnimation(true, "top 60%");
    animateWithMatchMedia("top 60%");
  });
  gsapmm.add("(max-width: 639px)", () => {
    doTabAnimation(true, "top 40%");
    animateWithMatchMedia("top 50%");
  });
  gsapmm.add("(min-width: 1024px)", () =>
    animatePinSectionWithMatchMedia(-436)
  );
  gsapmm.add("(min-width: 768px) and (max-width: 1023px)", () =>
    animatePinSectionWithMatchMedia(-300)
  );

  // Section 6
  gsap.from("#section6 .texts-div *", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#section6",
      scroller: "body",
      start: "top 70%",
      end: "top 70%",
    },
  });

  gsap.from("#section6 .dd-left div", {
    x: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#section6",
      scroller: "body",
      start: "top 70%",
      end: "top 70%",
    },
  });

  // Section 8
  gsap.from("#section8 #top > div", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#section8",
      scroller: "body",
      start: "top 60%",
      end: "top 60%",
    },
  });

  gsap.from("#section8 #middle > *", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#section8 #middle",
      scroller: "body",
      start: "top 80%",
      end: "top 80%",
    },
  });

  gsap.from("#section8 #bottom", {
    y: 50,
    opacity: 0,
    duration: 0.75,
    scrollTrigger: {
      trigger: "#section8 #bottom",
      scroller: "body",
      start: "top 70%",
      end: "top 70%",
    },
  });

  ScrollTrigger.refresh();
})();
