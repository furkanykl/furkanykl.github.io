const grid = document.querySelector('.product-grid');
const category = '1.sayfa'; // veya ayakkabilar

for (let row = 1; row <= 20; row++) {
  for (let col = 1; col <= 4; col++) {
    const basePath = `images/${category}/${row}-${col}_`;
    const images = [`${basePath}1.jpg`, `${basePath}2.jpg`, `${basePath}3.jpg`]; // kaç tane varsa

    const product = document.createElement('div');
    product.className = 'product';
    product.setAttribute('data-images', JSON.stringify(images));

    // Fotoğraf
    const img = document.createElement('img');
    img.src = images[0];
    img.alt = `${row}.${col}`;
    product.appendChild(img);

    // Nokta (indicator) kutusu
    const indicators = document.createElement('div');
    indicators.className = 'indicators';

    images.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.className = 'dot' + (index === 0 ? ' active' : '');
      indicators.appendChild(dot);
    });

    product.appendChild(indicators);
    grid.appendChild(product);
  }
}

// Mouse hareketiyle fotoğraf ve aktif noktayı güncelle
document.querySelectorAll('.product').forEach(product => {
  const imgEl = product.querySelector('img');
  const dots = product.querySelectorAll('.dot');
  const images = JSON.parse(product.getAttribute('data-images'));

  if (images.length === 1) return;

  product.addEventListener('mousemove', (e) => {
    const rect = product.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const sectionWidth = rect.width / images.length;
    const index = Math.min(Math.floor(x / sectionWidth), images.length - 1);

    imgEl.src = images[index];
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  });

  product.addEventListener('mouseleave', () => {
    imgEl.src = images[0];
    dots.forEach(dot => dot.classList.remove('active'));
    dots[0].classList.add('active');
  });
});
