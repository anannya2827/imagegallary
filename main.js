// 1. Select the DOM elements
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// 2. Curated moody, fine-dining food photos hosted on Unsplash
const images = [
  { 
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600', 
    alt: 'Gourmet dry-aged steak with rosemary on a dark stone slab' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600', 
    alt: 'Vibrant artisanal salad beautifully arranged on a dark ceramic dish' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=600', 
    alt: 'Rich, dark chocolate truffles coated in cocoa powder' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600', 
    alt: 'Glazed gourmet donut served under low, atmospheric lightning' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=600', 
    alt: 'Elegant fine-dining small plates composition against a dark textured tabletop' 
  }
];

// 3. Loop through images to populate the thumbnail bar
for (const image of images) {
  const newImage = document.createElement('img');
  
  newImage.setAttribute('src', image.url);
  newImage.setAttribute('alt', image.alt);
  thumbBar.appendChild(newImage);

  // Click listener to swap main display image
  newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

// 4. Wiring up the Ambient Dimming button logic
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');

  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Bring Light';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Dim Room';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});