# Barberweb
Barber website for Web 42000
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Big League Barber Shop</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
:root{
  --ink:#0b1220;--brand:#0ea5e9;--accent:#f97316;--soft:#f4f7fb;
  --radius:16px;--shadow:0 8px 30px rgba(2,6,23,.08);
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;color:var(--ink);background:#fff;scroll-behavior:smooth;line-height:1.6}
.container{max-width:1100px;margin:auto;padding:0 20px}
img{max-width:100%;height:auto;display:block;border-radius:8px}
.btn{display:inline-block;border:1.5px solid var(--ink);padding:10px 16px;border-radius:999px;font-weight:700;text-decoration:none;transition:.3s}
.btn.primary{background:var(--brand);color:#fff;border:none}
.btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,.1)}
.announcement{text-align:center;background:linear-gradient(90deg,var(--brand),#60a5fa);color:#fff;padding:8px;font-weight:600;letter-spacing:.3px}

/* HEADER */
.site-header{position:sticky;top:0;background:#ffffffcc;border-bottom:1px solid #eef2f7;backdrop-filter:blur(10px);z-index:50;transition:.3s}
.header-inner{display:flex;justify-content:space-between;align-items:center;min-height:64px}
.brand{display:flex;align-items:center;gap:8px;font-weight:800;text-decoration:none;color:var(--ink);font-size:22px}
.logo{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--brand),#38bdf8);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;box-shadow:var(--shadow)}
.nav{display:flex;gap:24px;align-items:center}
.nav a{color:#0b1220;text-decoration:none;font-weight:600;transition:.3s}
.nav a:hover{color:var(--brand)}
.hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px}
.hamburger span{display:block;width:24px;height:2px;background:#111;margin:5px 0;border-radius:2px}

/* HERO */
.hero{position:relative;min-height:70vh;display:grid;place-items:center;overflow:hidden;text-align:center;color:#fff}
.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.6);transform:scale(1);transition:transform 10s ease;}
.hero:hover .hero-img{transform:scale(1.05)}
.hero-content{position:relative;z-index:1;padding:60px 20px;animation:fadeIn 1.2s ease-out}
.hero h1{font-size:clamp(30px,5vw,54px);margin-bottom:12px}
.hero p{font-size:18px;max-width:650px;margin:0 auto 24px}

/* SECTIONS */
.section{padding:80px 0;animation:fadeUp .8s ease-out both}
.section.alt{background:var(--soft)}
.section-title{text-align:center;font-size:30px;margin-bottom:10px;font-weight:800}
.section-subtitle{text-align:center;color:#64748b;margin-bottom:30px;font-size:18px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px}
.card{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;transition:.3s}
.card:hover{transform:translateY(-5px);box-shadow:0 10px 25px rgba(0,0,0,.1)}
.card-body{padding:18px;text-align:center}
.card h3{margin-bottom:6px}
.price{font-weight:800;color:var(--accent)}

/* LOCATIONS */
.locations-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}
.location{background:#fff;border-radius:var(--radius);box-shadow:var(--shadow);border:1px solid #eef2f7;transition:.3s}
.location:hover{transform:translateY(-4px)}
.location .map img{width:100%;height:auto;border-bottom:1px solid #e2e8f0}
.location .body{padding:16px}
.location .meta{color:#64748b;font-size:14px;margin-bottom:6px}
.location .actions{display:flex;gap:10px;padding:16px;justify-content:center}

/* GALLERY */
.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px}
.gallery-grid img{cursor:pointer;transition:.3s;object-fit:cover;width:100%;height:250px}
.gallery-grid img:hover{transform:scale(1.03)}

/* ABOUT */
.about{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}
.about-img{border-radius:var(--radius);box-shadow:var(--shadow)}

/* CONTACT */
.contact-inner{display:grid;grid-template-columns:1fr .8fr;gap:30px;align-items:start}
.contact-card{background:#fff;padding:24px;border-radius:var(--radius);box-shadow:var(--shadow)}

/* FOOTER */
.site-footer{padding:30px 0;border-top:1px solid #eef2f7;text-align:center;color:#475569;font-size:15px}

/* MEDIA */
@media(max-width:768px){
  .about,.contact-inner{grid-template-columns:1fr}
  .nav{display:none;flex-direction:column;gap:12px;background:#fff;position:absolute;inset:64px 0 auto 0;padding:20px;border-bottom:1px solid #eef2f7}
  .hamburger{display:block}
}

/* ANIMATIONS */
@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
</style>
</head>
<body>

<div class="announcement">💈 Game-day special — ask your barber! ✂️</div>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="#home"><div class="logo">B</div>Big League</a>
    <button id="navToggle" class="hamburger"><span></span><span></span><span></span></button>
    <nav id="siteNav" class="nav">
      <a href="#services">Services</a><a href="#locations">Locations</a><a href="#gallery">Gallery</a>
      <a href="#about">About</a><a href="#contact" class="btn primary">Book Now</a>
    </nav>
  </div>
</header>

<section id="home" class="hero">
  <img src="https://images.unsplash.com/photo-1588776814546-12331ec2f060?auto=format&fit=crop&w=1600&q=80" class="hero-img" alt="Barbershop background">
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
    <div class="card"><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" loading="lazy"><div class="card-body"><h3>Classic Cut</h3><p>Clipper/scissor cut, style finish.</p><div class="price">$25–$35</div></div></div>
    <div class="card"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" loading="lazy"><div class="card-body"><h3>Skin Fade</h3><p>Skin-to-long fade with precision blend.</p><div class="price">$30–$40</div></div></div>
    <div class="card"><img src="https://images.unsplash.com/photo-1559599101-1fb4d1d6c3d3?auto=format&fit=crop&w=800&q=80" loading="lazy"><div class="card-body"><h3>Beard Trim</h3><p>Beard sculpting with hot towel finish.</p><div class="price">$15–$25</div></div></div>
    <div class="card"><img src="https://images.unsplash.com/photo-1610173820460-31a734c9fcbe?auto=format&fit=crop&w=800&q=80" loading="lazy"><div class="card-body"><h3>Kids Cut</h3><p>Friendly cuts for the all-stars in training.</p><div class="price">$20–$25</div></div></div>
  </div>
</section>

<section id="locations" class="section alt">
  <h2 class="section-title">Locations</h2>
  <p class="section-subtitle">Pick your home field.</p>
  <div class="container locations-grid" id="locationGrid"></div>
</section>

<section id="gallery" class="section">
  <h2 class="section-title">Gallery</h2>
  <p class="section-subtitle">A few of our favorite styles.</p>
  <div class="container gallery-grid">
    <img src="https://images.unsplash.com/photo-1621609772986-8503e6f3eb65?auto=format&fit=crop&w=600&q=80" alt="Fade" loading="lazy">
    <img src="https://images.unsplash.com/photo-1617050284377-1a53b939c173?auto=format&fit=crop&w=600&q=80" alt="Line Up" loading="lazy">
    <img src="https://images.unsplash.com/photo-1584735935682-2f2b6b8b8e3d?auto=format&fit=crop&w=600&q=80" alt="Beard" loading="lazy">
    <img src="https://images.unsplash.com/photo-1600369672981-96f11fdf45e4?auto=format&fit=crop&w=600&q=80" alt="Style" loading="lazy">
  </div>
</section>

<section id="about" class="section alt">
  <div class="container about">
    <div>
      <h2 class="section-title">About Big League</h2>
      <p>Locally owned barbershop focused on consistent quality, fair pricing, and friendly service. We bring back the old-school charm with modern precision.</p>
      <ul><li>Walk-ins welcome</li><li>Online booking</li><li>Kid-friendly</li><li>Gift cards available</li></ul>
    </div>
    <img src="https://images.unsplash.com/photo-1618373334328-49e04f24b5cb?auto=format&fit=crop&w=800&q=80" class="about-img" alt="Shop interior" loading="lazy">
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
const locations=[{name:'Downtown',address:'123 Main St, Fort Wayne, IN',phone:'(260) 555-0101',blurb:'Heart of downtown. Street & garage parking.',img:'https://images.unsplash.com/photo-1596733430284-5ccdc1bdbb76?auto=format&fit=crop&w=600&q=80',directions:'https://maps.google.com',booking:'#'},
{name:'North',address:'456 Oak Ave, Fort Wayne, IN',phone:'(260) 555-0112',blurb:'Next to the shopping center. Plenty of parking.',img:'https://images.unsplash.com/photo-1570032257806-7272438fda33?auto=format&fit=crop&w=600&q=80',directions:'https://maps.google.com',booking:'#'}];
const grid=document.getElementById('locationGrid');
locations.forEach(l=>{
 const el=document.createElement('div');
 el.className='location';
 el.innerHTML=`<div class="map"><img src="${l.img}" alt="${l.name} location" loading="lazy"></div>
 <div class="body"><h3>${l.name}</h3><div class="meta">${l.address} • ${l.phone}</div><p>${l.blurb}</p></div>
 <div class="actions"><a class="btn" href="${l.directions}" target="_blank">Directions</a><a class="btn primary" href="${l.booking}">Book</a></div>`;
 grid.appendChild(el);
});
</script>
</body>
</html>
