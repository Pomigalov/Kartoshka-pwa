const mock = {
  users: [
    { id: 'u1', name: 'Алексей', role: 'owner', phone: '+7xxx', rating: 4.8 },
    { id: 'u2', name: 'Светлана', role: 'renter', phone: '+7xxx', rating: 4.9 }
  ],
  equipment: [
    {
      id: 'e1',
      title: 'Бензиновая газонокосилка',
      description: 'Мощная, ширина 50 см. Заправлена. Подойдёт для больших участков.',
      pricePerDay: 600,
      address: 'СНТ Берёзка, уч. 12',
      lat: 55.751, lng: 37.617,
      images: [],
      ownerId: 'u1',
      isAvailable: true
    },
    {
      id: 'e2',
      title: 'Электрический триммер',
      description: 'Лёгкий, для мелкой травы. Работает от сети и удлинителя.',
      pricePerDay: 250,
      address: 'СНТ Берёзка, уч. 5',
      lat: 55.753, lng: 37.615,
      images: [],
      ownerId: 'u1',
      isAvailable: true
    },
    {
      id: 'e3',
      title: 'Мотоблок малый',
      description: 'Для вспашки и культивации. Сцепление ручное.',
      pricePerDay: 1500,
      address: 'СНТ Дубок, уч. 3',
      lat: 55.755, lng: 37.620,
      images: [],
      ownerId: 'u1',
      isAvailable: false
    }
  ],
  bookings: []
}

export default mock
