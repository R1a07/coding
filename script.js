// DOMの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
  // GSAPのScrollTriggerを登録
  gsap.registerPlugin(ScrollTrigger);

  // Worksセクションの画像を取得
  const worksImages = document.querySelectorAll('.Works-img img');
  
  // 画像を3列ごとにグループ化（上段と下段）
  const topRow = Array.from(worksImages).slice(0, 3);
  const bottomRow = Array.from(worksImages).slice(3, 6);

  // 上段のアニメーション
  topRow.forEach((img, index) => {
    gsap.set(img, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    gsap.to(img, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: topRow[0],
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.2
    });
  });

  // 下段のアニメーション
  bottomRow.forEach((img, index) => {
    gsap.set(img, {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    gsap.to(img, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bottomRow[0],
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.2
    });
  });
}); 