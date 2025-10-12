// Simple seed data for vendors & services (used for demo and filtering)
const SEED_VENDORS = [
  {
    id: 'v1',
    name: 'Lucena QuickPrint',
    city: 'Lucena',
    address: 'Barangay 1, Lucena City',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's1', name: 'B&W Printing', pricePerPage: 2.5, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's2', name: 'Color Printing', pricePerPage: 6.0, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's3', name: 'Photocopy', pricePerPage: 1.0, img: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1200&auto=format&fit=crop' }
    ]
  },
  {
    id: 'v2',
    name: 'SLSU Campus Print',
    city: 'Lucban',
    address: 'Near Main Gate, Lucban',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    services: [
      { id: 's1', name: 'B&W Printing', pricePerPage: 2.0, img: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop' },
      { id: 's4', name: 'Color Laser', pricePerPage: 8.0, img: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&w=1200&auto=format&fit=crop' }
    ]
  }
];
