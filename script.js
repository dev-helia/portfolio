// 平滑滚动到指定部分
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// 获取页面所有 section
const sections = document.querySelectorAll(".section");

// 使用 Intersection Observer 监听页面滚动
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // 元素进入视口时添加类
      } else {
        entry.target.classList.remove("visible"); // 离开视口时移除类
      }
    });
  },
  { threshold: 0.3 } // 元素可见度达到 30% 时触发
);

// 将所有 section 添加到观察器
sections.forEach((section) => observer.observe(section));

// 返回顶部按钮功能
// 获取返回顶部按钮
const scrollTopBtn = document.getElementById("scroll-top");

// 监听滚动事件，控制按钮的显示和隐藏
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("visible");  // 当滚动超过 200px 时，显示按钮
  } else {
    scrollTopBtn.classList.remove("visible");  // 否则隐藏按钮
  }
});

// 监听点击事件，平滑滚动到页面顶部
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",  // 平滑滚动
  });
});


// 动态设置技能环形图的进度条
// 动态加载环形进度条
// 动态设置技能环形图的进度条
window.addEventListener('load', () => {
  const circles = document.querySelectorAll('.circle');

  circles.forEach((circle) => {
    const progress = circle.getAttribute('data-progress');
    let start = 0;

    const interval = setInterval(() => {
      if (start >= progress) {
        clearInterval(interval);
      } else {
        start++;
        circle.style.background = `conic-gradient(
          #555 ${start * 3.6}deg, /* 黑色环形进度条 */
          #e0e0e0 0deg
        )`; /* 灰色背景 */
      }
    }, 10); // 每 10ms 增加 1%
  });
});

// 夜间模式
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode"); // 切换 dark-mode 类
  themeToggle.textContent = body.classList.contains("dark-mode") ? "🌙" : "🌞"; // 按钮图标
});

