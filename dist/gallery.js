// 이미지 데이터 배열
const images = [
  {
    href: './dist/assets/photo/1.webp',
  },
  {
    href: './dist/assets/photo/2.webp',
  },
  {
    href: './dist/assets/photo/3.webp',
  },
  {
    href: './dist/assets/photo/4.webp',
  },
  {
    href: './dist/assets/photo/5.webp',
  },
  {
    href: './dist/assets/photo/6.webp',
  },
  {
    href: './dist/assets/photo/7.webp',
  },
  {
    href: './dist/assets/photo/8.webp',
  },
  {
    href: './dist/assets/photo/9.webp',
  },
  {
    href: './dist/assets/photo/10.webp',
  },
  {
    href: './dist/assets/photo/11.webp',
  },
  {
    href: './dist/assets/photo/12.webp',
  },
  {
    href: './dist/assets/photo/13.webp',
  },
];

// 갤러리 컨테이너 가져오기
const galleryContainer = document.getElementById('gallery');

// 갤러리 항목 생성 함수
function createGalleryItem(image) {
  const item = document.createElement('div');
  item.className = 'w-full md:w-1/2 p-1';

  item.innerHTML = `
    <div class="overflow-hidden h-full w-full">
      <a href="${image.href}" data-fancybox="gallery">
        <img
          alt="${image.alt}"
          class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
          src="${image.href}"
        />
      </a>
    </div>
  `;

  return item;
}

// 갤러리 항목 추가
images.forEach((image) => {
  const galleryItem = createGalleryItem(image);
  galleryContainer.appendChild(galleryItem);
});
