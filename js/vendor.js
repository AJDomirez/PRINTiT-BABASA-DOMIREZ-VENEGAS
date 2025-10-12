requireAuth();

const vendorId = qsp('id');
const vendor = getVendors().find(v => v.id === vendorId);
if (!vendor) { alert('Vendor not found'); location.replace('home.html'); }

document.getElementById('vendorTitle').textContent = vendor.name;

const infoEl = document.getElementById('vendorInfo');
infoEl.innerHTML = `
  <h3>${vendor.name}</h3>
  <p class="muted">${vendor.address || '—'} · ${vendor.city}</p>
`;

const svcEl = document.getElementById('serviceList');
svcEl.innerHTML = vendor.services.map(s => `
  <div class="card service-card">
    <img src="${s.img || 'assets/logo.png'}" alt="${s.name}">
    <h4>${s.name}</h4>
    <p class="muted">₱${s.pricePerPage.toFixed(2)} / page</p>
    <a class="btn primary" href="order.html?vendorId=${vendor.id}&serviceId=${s.id}">Print‑IT</a>
  </div>
`).join('');
