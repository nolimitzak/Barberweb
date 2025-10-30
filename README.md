<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Big League Barber Shop</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="indexstyle.css">
<script src="script.js"></script>
</head>
<body>
<<div class="announcement"></div>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="#home"><div class="logo"></div>Big League</a>
    <button id="navToggle" class="hamburger"><span></span><span></span><span></span></button>
    <nav id="siteNav" class="nav">
      <a href="#services">Services</a><a href="#locations">Locations</a><a href="#gallery">Gallery</a><a href="#about">About</a>
      <a href="#contact" class="btn primary">Book Now</a>
    </nav>
  </div>
</header>

<section id="home" class="hero">
  <img src="wjeffersonfront-1920x1000-1.png" class="hero-img" alt="">
  <!--Float-->
  <div class="hero-content container">
    <h1>Fresh Cuts. Clean Fades. Big League Confidence.</h1>
    <p>Modern barbershop with classic vibes — walk-ins welcome, appointments recommended.</p>
    <a href="#services" class="btn">See Services</a>
    <a href="#contact" class="btn outline">Book Now</a>
  </div>
</section>

<section id="services" class="section">
  <h2 class="section-title">Our Services</h2>
  <p class="section-subtitle">Straightforward pricing. Quality you can trust.</p>
  <div class="container cards">
    <div class="card"><img src="fea1.png"><div class="card-body"><h3>Classic Cut</h3><p>Clipper/scissor cut, style finish.</p><div class="price">$25–$35</div></div></div>
    <div class="card"><img src="https://via.placeholder.com/600x400?text=Skin+Fade"><div class="card-body"><h3>Skin Fade</h3><p>Skin-to-long fade with precision blend.</p><div class="price">$30–$40</div></div></div>
    <div class="card"><img src="https://via.placeholder.com/600x400?text=Beard+Trim"><div class="card-body"><h3>Beard Trim</h3><p>Beard sculpting with hot towel finish.</p><div class="price">$15–$25</div></div></div>
    <div class="card"><img src="https://via.placeholder.com/600x400?text=Kids+Cut"><div class="card-body"><h3>Kids Cut</h3><p>Friendly cuts for the all-stars in training.</p><div class="price">$20–$25</div></div></div>
  </div>
</section>

<section id="locations" class="section alt">
  <h2 class="section-title">Locations</h2>
  <p class="section-subtitle">Pick your home field.</p>
  <div class="container locations-grid" id="locationGrid"></div>
</section>

<section id="gallery" class="section">
  <h2 class="section-title">Gallery</h2>
  <div class="container cards">
    <img src="https://via.placeholder.com/400x400?text=Fade" alt="">
    <img src="https://via.placeholder.com/400x400?text=Line+Up" alt="">
    <img src="https://via.placeholder.com/400x400?text=Beard" alt="">
  </div>
</section>

<section id="about" class="section alt">
  <div class="container about">
    <div>
      <h2 class="section-title">About Big League</h2>
      <p>Locally owned barbershop focused on consistent quality, fair pricing, and friendly service.</p>
      <ul><li>Walk-ins welcome</li><li>Online booking</li><li>Kid-friendly</li><li>Gift cards available</li></ul>
    </div>
    <img src="https://via.placeholder.com/600x400?text=Shop+Interior" class="about-img" alt="">
  </div>
</section>

<section id="contact" class="section">
  <div class="container contact-inner">
    <div>
      <h2 class="section-title">Book Your Next Cut</h2>
      <p>Choose a location and time that works for you.</p>
      <a href="#" id="bookNow" class="btn primary">Book Online</a>
    </div>
    <div class="contact-card">
      <h3>Questions?</h3>
      <p><a href="tel:+12606660000">(260) 666-0000</a><br><a href="mailto:info@example.com">info@example.com</a></p>
    </div>
  </div>
</section>

<footer class="site-footer">
  <p>© <span id="year"></span> Big League Barber Shop. All rights reserved.</p>
</footer>

<script>
const navToggle=document.getElementById('navToggle'),siteNav=document.getElementById('siteNav');
navToggle?.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!open));siteNav.style.display=open?'none':'flex';});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('bookNow')?.addEventListener('click',e=>{e.preventDefault();alert('Booking system coming soon!');});
const locations=[{name:'Downtown',address:'123 Main St, Fort Wayne, IN',phone:'(260) 555-0101',blurb:'Heart of downtown. Street & garage parking.',directions:'https://maps.google.com',booking:'#'},{name:'North',address:'456 Oak Ave, Fort Wayne, IN',phone:'(260) 555-0112',blurb:'Next to the shopping center. Plenty of parking.',directions:'https://maps.google.com',booking:'#'}];
const grid=document.getElementById('locationGrid');
locations.forEach(l=>{const el=document.createElement('div');el.className='location';el.innerHTML=`<div class="map">Map Preview</div><div class="body"><h3>${l.name}</h3><div class="meta">${l.address} • ${l.phone}</div><p>${l.blurb}</p></div><div class="actions"><a class="btn" href="${l.directions}" target="_blank">Directions</a><a class="btn primary" href="${l.booking}">Book</a></div>`;grid.appendChild(el);});
</script>
</body>
</html>
