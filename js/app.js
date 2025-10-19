// ====== Local Demo “DB” using localStorage ======
const LS_KEYS = { USERS: 'pi_users', SESSION: 'pi_session', ORDERS: 'pi_orders', VENDORS: 'pi_vendors' };

function initSeed() {
  if (!localStorage.getItem(LS_KEYS.VENDORS)) {
    localStorage.setItem(LS_KEYS.VENDORS, JSON.stringify(SEED_VENDORS));
  }
  if (!localStorage.getItem(LS_KEYS.USERS)) {
    // seed one vendor & one user
    const seed = [
      { name: 'Demo User', email: 'user@example.com', password: '123456', role: 'user' },
      { name: 'Admin', email: 'admin@example.com', password: '123456', role: 'admin' }
    ];
    localStorage.setItem(LS_KEYS.USERS, JSON.stringify(seed));
  }
  if (!localStorage.getItem(LS_KEYS.ORDERS)) {
    localStorage.setItem(LS_KEYS.ORDERS, JSON.stringify([]));
  }
}
initSeed();

// ====== Auth ======
function getUsers() { return JSON.parse(localStorage.getItem(LS_KEYS.USERS) || '[]'); }
function setUsers(u) { localStorage.setItem(LS_KEYS.USERS, JSON.stringify(u)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem(LS_KEYS.SESSION) || 'null'); }
function setCurrentUser(u) { localStorage.setItem(LS_KEYS.SESSION, JSON.stringify(u)); }
function logout() { localStorage.removeItem(LS_KEYS.SESSION); location.href = 'index.html'; }

function register({ name, email, password, role, vendorName }) {
  const users = getUsers();
  if (users.some(u => u.email === email)) {
    alert('Email already registered.');
    return;
  }
  const newUser = { name, email, password, role };
  if (role === 'vendor') {
    const vendors = getVendors();
    // create a vendor record
    const id = 'v' + (vendors.length + 1);
    vendors.push({ id, name: vendorName || `${name}'s Shop`, city: 'YourCity', address: '', img: '', services: [] });
    setVendors(vendors);
    newUser.vendorName = vendorName || `${name}'s Shop`;
    newUser.vendorId = id;
  }
  users.push(newUser);
  setUsers(users);
  alert('Registered! You can login now.');
  location.href = 'index.html';

  // TODO: connect to real DB (POST /users) and handle errors
}

function login(email, password, role) {
  const user = getUsers().find(u => u.email === email && u.password === password && u.role === role);
  if (!user) { alert('Invalid credentials or role.'); return; }
  setCurrentUser({ name: user.name, email: user.email, role: user.role, vendorId: user.vendorId, vendorName: user.vendorName });
  location.href = 'home.html';

  // TODO: connect to real DB (POST /login) and set JWT/session cookie
}

function requireAuth() {
  const u = getCurrentUser();
  if (!u) location.replace('index.html');
  return u;
}

// ====== Vendors ======
function getVendors() { return JSON.parse(localStorage.getItem(LS_KEYS.VENDORS) || '[]'); }
function setVendors(v) { localStorage.setItem(LS_KEYS.VENDORS, JSON.stringify(v)); }

// ====== Orders ======
function getOrders() { return JSON.parse(localStorage.getItem(LS_KEYS.ORDERS) || '[]'); }
function setOrders(o) { localStorage.setItem(LS_KEYS.ORDERS, JSON.stringify(o)); }

function createOrder(order) {
  const orders = getOrders();
  order.id = 'o' + (orders.length + 1);
  order.status = 'Pending';
  order.createdAt = Date.now();
  orders.push(order);
  setOrders(orders);

  // TODO: connect to real DB (POST /orders)
  return order.id;
}

function updateOrderStatus(id, status) {
  const orders = getOrders();
  const o = orders.find(x => x.id === id);
  if (!o) return;
  o.status = status;
  setOrders(orders);
  alert(`Order ${id} → ${status}`);
  location.reload();

  // TODO: connect to real DB (PATCH /orders/:id)
}

function cancelOrder(id) { updateOrderStatus(id, 'Canceled'); }

// ====== UI helpers ======
function togglePassword(inputId) {
  const el = document.getElementById(inputId);
  el.type = el.type === 'password' ? 'text' : 'password';
}

function qsp(key) { return new URLSearchParams(location.search).get(key); }

// Geolocation → naive city string (demo)
async function getGeoCity() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(() => {
      // NOTE: No reverse‑geocoding here; just demo.
      // You can call a geocoding API later and set the city.
      resolve('Lucena');
    }, () => resolve(null));
  });
}

// Logout on pages that have the button
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) logoutBtn.addEventListener('click', logout);


