
const navToggle=document.getElementById('navToggle'),siteNav=document.getElementById('siteNav');
navToggle?.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!open));siteNav.style.display=open?'none':'flex';});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('bookNow')?.addEventListener('click',e=>{e.preventDefault();alert('Booking system coming soon!');});
const locations=[{name:'Downtown',address:'123 Main St, Fort Wayne, IN',phone:'(260) 555-0101',blurb:'Heart of downtown. Street & garage parking.',directions:'https://maps.google.com',booking:'#'},{name:'North',address:'456 Oak Ave, Fort Wayne, IN',phone:'(260) 555-0112',blurb:'Next to the shopping center. Plenty of parking.',directions:'https://maps.google.com',booking:'#'}];
const grid=document.getElementById('locationGrid');
locations.forEach(l=>{const el=document.createElement('div');el.className='location';el.innerHTML=`<div class="map">Map Preview</div><div class="body"><h3>${l.name}</h3><div class="meta">${l.address} • ${l.phone}</div><p>${l.blurb}</p></div><div class="actions"><a class="btn" href="${l.directions}" target="_blank">Directions</a><a class="btn primary" href="${l.booking}">Book</a></div>`;grid.appendChild(el);});
