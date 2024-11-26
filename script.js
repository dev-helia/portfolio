//1️⃣粒子
const canvas = document.createElement("canvas");
document.getElementById("particle-container").appendChild(canvas);
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 100;

// 初始化 Canvas 尺寸
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// 粒子对象
class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

// 初始化粒子
function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 3 + 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      )
    );
  }
}
initParticles();
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}
animate();

//2️⃣ 滚动时导航栏缩小
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "5px 0";
    navbar.style.background = "rgba(13, 27, 42, 0.9)"; /* 加深背景 */
  } else {
    navbar.style.padding = "10px 0";
    navbar.style.background = "rgba(13, 27, 42, 0.8)";
  }
});



//1️⃣ 首页（Home）升级：动态欢迎特效
// script.js
const texts = ["Dreamer.", "Developer.", "Creator."];
let index = 0;
let charIndex = 0;
const speed = 100; // 打字速度
const delay = 2000; // 每个词后的停顿时间
const dynamicText = document.getElementById("dynamic-text");

function typeEffect() {
    if (charIndex < texts[index].length) {
        dynamicText.textContent += texts[index][charIndex];
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(() => {
            dynamicText.textContent = "";
            charIndex = 0;
            index = (index + 1) % texts.length; // 循环展示
            typeEffect();
        }, delay);
    }
}

typeEffect();

//2️⃣ 关于我（About Me）：时间轴动画
const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  timelineItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      item.classList.add("active");
    }
  });
});


//2️⃣ 增强 Skills 动态环形图
const skillSection = document.querySelector("#skills");
const skillCircles = document.querySelectorAll(".circle-container");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillCircles.forEach((circle) => circle.classList.add("visible"));
      }
    });
  },
  { threshold: 0.5 }
);

skillObserver.observe(skillSection);

//4️⃣ 增加动画入口效果
const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => sectionObserver.observe(section));

//🌟 鼠标跟随粒子特效
document.addEventListener("mousemove", (event) => {
  const circle = document.createElement("div");
  circle.className = "mouse-circle";
  circle.style.left = `${event.pageX}px`;
  circle.style.top = `${event.pageY}px`;
  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1000);
});

//5️⃣ 增加网站加载动画

window.addEventListener("load", () => {
  document.getElementById("loading-screen").style.display = "none";
});

//🌟 增强滚动视差效果
const parallaxItems = document.querySelectorAll(".parallax");

const parallaxObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.5 }
);

parallaxItems.forEach((item) => parallaxObserver.observe(item));


//3️⃣ 添加网站的“返回顶部”按钮
const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//1️⃣ 导航添加固定滚动下的动态效果
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//3️⃣ 添加导航栏动画入口效果
window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("visible");
});



//2️⃣ 动态弹出气泡
const chatBubbles = document.querySelectorAll(".chat-bubble");

window.addEventListener("scroll", () => {
  chatBubbles.forEach((bubble, index) => {
    const rect = bubble.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      setTimeout(() => {
        bubble.style.opacity = 1;
        bubble.style.transform = "translateY(0)";
      }, index * 300); // 延迟显示效果
    }
  });
});

//3️⃣ 附加交互：发送音效
const soundEffect = new Audio("assets/sounds/send.mp3");

chatBubbles.forEach((bubble, index) => {
  const rect = bubble.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    setTimeout(() => {
      soundEffect.play(); // 播放音效
    }, index * 300);
  }
});

//4️⃣ 高级选项：贴标签（可选）
chatBubbles.forEach((bubble) => {
  bubble.addEventListener("click", () => {
    const sticker = document.createElement("span");
    sticker.textContent = "👍"; // 你可以用表情或者自定义文字
    sticker.classList.add("sticker");
    bubble.appendChild(sticker);
  });
});

//⭐️实现背景随鼠标移动的动态效果
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e; // 鼠标相对元素的位置
  const { clientWidth, clientHeight } = hero; // 元素宽高

  // 计算背景移动的偏移量
  const moveX = (offsetX / clientWidth - 0.5) * 20; // 调整数值控制移动幅度
  const moveY = (offsetY / clientHeight - 0.5) * 20;

  // 应用到背景
  hero.style.setProperty("--x", `${moveX}px`);
  hero.style.setProperty("--y", `${moveY}px`);
});

//3️⃣ 社交 JavaScript 动态控制显示效果
document.addEventListener("DOMContentLoaded", () => {
  const socialOptions = document.querySelector(".options-container");

  // 检测页面滚动事件
  window.addEventListener("scroll", () => {
    const rect = socialOptions.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 当选项容器进入视口时，显示动画
    if (rect.top < windowHeight && rect.bottom >= 0) {
      socialOptions.classList.remove("hidden");
      socialOptions.classList.add("visible");
    }
  });
});
