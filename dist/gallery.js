// 이미지 데이터 배열
const images = [
  {
    href: 'https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80',
    alt: 'a person standing in front of a rock formation',
  },
  {
    href: 'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1963&q=80',
    alt: 'a cat laying on top of a sidewalk next to the ocean',
  },
  {
    href: 'https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1750&q=80',
    alt: 'a man standing on a beach next to the ocean',
  },
  {
    href: 'https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'a snow covered mountain with trees on the side',
  },
  // 추가 이미지 데이터...
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
