document.addEventListener("DOMContentLoaded", function() {
  const imagePaths = [
    "images/note1.png",
    "images/note2.png",
    "images/note3.png",
    "images/note1.png",
    "images/note2.png",
    "images/note3.png",
    "images/note1.png",
    "images/note2.png",
    "images/note3.png",
    "images/note1.png",
    "images/note2.png",
    "images/note3.png"
  ];

  const container = document.body;
  const usedPositions = [];
  const MIN_DISTANCE = 150; // in pixels

  function isTooClose(x, y) {
    return usedPositions.some(pos => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE;
    });
  }

  imagePaths.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "floating-image";
    img.style.scale = Math.random() * 0.7;
    img.style.opacity = 0.5;

    let x, y;
    let attempts = 0;

    do {
      x = Math.random() * (container.clientWidth - 100);
      y = Math.random() * (container.clientHeight - 100);
      attempts++;
    } while (isTooClose(x, y) && attempts < 50);

    usedPositions.push({ x, y });

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);
  });
});