requireAuth();

const vId = qsp('vendorId');
const sId = qsp('serviceId');
const vendor = getVendors().find(v => v.id === vId);
if (!vendor) { alert('Vendor not found'); location.replace('home.html'); }
const service = vendor.services.find(s => s.id === sId) || vendor.services[0];

// Fill hidden fields
vendorId.value = vId; serviceId.value = sId;
pricePerPage.textContent = `₱${service.pricePerPage.toFixed(2)}`;

let detectedPages = 0;

async function countPdfPages(file) {
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  return pdf.numPages;
}

function estimateTotal() {
  const total = detectedPages * service.pricePerPage;
  pageCount.textContent = detectedPages;
  estTotal.textContent = `₱${total.toFixed(2)}`;
}

docFile.addEventListener('change', async () => {
  const file = docFile.files?.[0];
  if (!file) return;
  detectedPages = 1; // default
  try {
    if (file.type === 'application/pdf') {
      detectedPages = await countPdfPages(file);
    }
  } catch (e) {
    console.warn('Page count failed, defaulting to 1', e);
    detectedPages = 1;
  }
  estimateTotal();
});

fulfillment.addEventListener('change', () => {
  const isDelivery = fulfillment.value === 'delivery';
  addressWrap.style.display = isDelivery ? 'grid' : 'none';
  address.required = isDelivery;
});

printBtn.addEventListener('click', () => window.print());

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = getCurrentUser();
  const total = detectedPages * service.pricePerPage;
  const order = {
    userEmail: user.email,
    vendorId: vendor.id,
    vendorName: vendor.name,
    serviceId: service.id,
    serviceName: service.name,
    pages: detectedPages || 1,
    pricePerPage: service.pricePerPage,
    total,
    fulfillment: fulfillment.value,
    payment: payment.value,
    address: fulfillment.value === 'delivery' ? address.value.trim() : '',
    note: note.value.trim(),
  };
  const id = createOrder(order);
  alert(`Order created! ID: ${id}`);
  location.href = 'status.html';
});

// Initial
estimateTotal();
