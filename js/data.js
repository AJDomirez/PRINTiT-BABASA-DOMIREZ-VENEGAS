// Simple seed data for vendors & services (used for demo and filtering)
const SEED_VENDORS = [
  {
    id: 'v1',
    name: 'SSC SLSU-Lucena Printing',
    city: 'Lucena',
    address: 'Barangay Ibabang Dupay, Lucena City',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's1', name: 'B&W Printing', pricePerPage: 2.5, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's2', name: 'Color Printing', pricePerPage: 6.0, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's3', name: 'Photocopy', pricePerPage: 1.0, img: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
  {
    id: 'v2',
    name: 'NETWORK CET_CENTER Printing',
    city: 'Lucena',
    address: 'Barangay Ibabang Dupay, Lucena City',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's1', name: 'B&W Printing', pricePerPage: 2.0, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's4', name: 'Color Laser', pricePerPage: 8.0, img: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
  {
    id: 'v3',
    name: 'Pagbilao Print Hub',
    city: 'Pagbilao',
    address: 'Poblacion, Pagbilao, Quezon',
    img: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's5', name: 'Document Scanning', pricePerPage: 3.0, img: 'https://images.unsplash.com/photo-1600166898403-5e30d65b9f3b?q=80&w=1200&auto=format&fit=crop' },
      { id: 's6', name: 'Laminating', pricePerPage: 10.0, img: 'https://images.unsplash.com/photo-1616628188414-35b3f22e4b59?q=80&w=1200&auto=format&fit=crop' },
      { id: 's7', name: 'Color Printing', pricePerPage: 6.5, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
  {
    id: 'v4',
    name: 'QuickPrint Pagbilao',
    city: 'Pagbilao',
    address: 'Barangay Talipan, Pagbilao, Quezon',
    img: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b9?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's8', name: 'Photo Printing', pricePerPage: 12.0, img: 'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?q=80&w=1200&auto=format&fit=crop' },
      { id: 's9', name: 'Laminating', pricePerPage: 8.5, img: 'https://images.unsplash.com/photo-1616628188414-35b3f22e4b59?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
  {
    id: 'v5',
    name: 'PrintEase Pagbilao Center',
    city: 'Pagbilao',
    address: 'Barangay Silangang Malicboy, Pagbilao, Quezon',
    img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's10', name: 'Color Printing', pricePerPage: 5.5, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's11', name: 'Photocopy', pricePerPage: 1.5, img: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1200&auto=format&fit=crop' },
      { id: 's12', name: 'Document Binding', pricePerPage: 15.0, img: 'https://images.unsplash.com/photo-1574772352660-7b7cc4c44338?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
  {
    id: 'v6',
    name: 'TechPrint Pagbilao Services',
    city: 'Pagbilao',
    address: 'Barangay Bantigue, Pagbilao, Quezon',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's13', name: 'B&W Printing', pricePerPage: 2.0, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's14', name: 'Document Scanning', pricePerPage: 3.0, img: 'https://images.unsplash.com/photo-1600166898403-5e30d65b9f3b?q=80&w=1200&auto=format&fit=crop' },
      { id: 's15', name: 'Photo Printing', pricePerPage: 10.0, img: 'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
];
