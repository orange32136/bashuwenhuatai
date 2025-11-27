// 导航高亮（当前页面匹配）
document.addEventListener('DOMContentLoaded', function () {
    // 获取当前页面URL
    const currentUrl = window.location.href;
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-link');

    // 遍历链接，匹配当前页面并添加active类
    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // 产品卡片hover效果增强
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        });
    });

    // 平滑滚动（点击锚点时）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});