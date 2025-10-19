requireAuth();

const listEl = document.getElementById('vendorList');
const searchEl = document.getElementById('searchLocation');
const useMyLocBtn = document.getElementById('useMyLoc');



function renderVendors(cityFilter = '') {
  const vendors = getVendors();
  const filtered = cityFilter ? vendors.filter(v => v.city.toLowerCase().includes(cityFilter.toLowerCase())) : vendors;
  listEl.innerHTML = filtered.map(v => `
    <div class="card vendor-card">
      <img src="${v.img || 'assets/new.png'}" alt="${v.name}"/>
      <h4>${v.name}</h4>
      <p class="muted">${v.address || '—'} · ${v.city}</p>
      <div class="row gap">
        <a class="btn primary" href="vendor.html?id=${v.id}">View Vendor</a>
      </div>
    </div>
  `).join('');
}

renderVendors();

searchEl.addEventListener('input', () => renderVendors(searchEl.value));
useMyLocBtn.addEventListener('click', async () => {
  const city = await getGeoCity();
  if (city) { searchEl.value = city; renderVendors(city); }
  else alert('Location not available. Type your city instead.');
});
