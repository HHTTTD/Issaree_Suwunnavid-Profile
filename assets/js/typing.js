document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typing-effect");

  elements.forEach(el => {
    const text = el.dataset.text || "";
    let index = 0;

    function type() {
      // ป้องกันเกิน: ตรวจสอบว่า index อยู่ในช่วงที่ถูกต้อง
      if (index <= text.length) {
        el.textContent = text.substring(0, index);
        index++;
        // ตรวจสอบว่าไม่เกินจริง ๆ ก่อนตั้ง timeout ถัดไป
        if (index <= text.length) {
          setTimeout(type, 50); // คุณสามารถลดเหลือ 50 ได้
        }
      }
    }

    type();
  });
});
