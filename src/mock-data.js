const mock = {
  users: [
    { id: 'u1', name: 'Алексей', role: 'owner', phone: '+7...', rating: 4.8 },
    { id: 'u2', name: 'Светлана', role: 'renter', phone: '+7...', rating: 4.9 }
  ],
  equipment: [
    {
      id: 'e1',
      title: 'Бензиновая газонокосилка',
      description: 'Мощная, ширина 50 см. Заправлена.',
      pricePerDay: 600,
      address: 'СНТ Берёзка, уч. 12',
      lat: 52.232, lng: 21.012,
      images: [],
      ownerId: 'u1',
      isAvailable: true
    },
    {
      id: 'e2',
      title: 'Электрический триммер',
      description: 'Лёгкий, для мелкой травы.',
      pricePerDay: 250,
      address: 'СНТ Берёзка, уч. 5',
      lat: 52.235, lng: 21.015,
      images: [],
      ownerId: 'u1',
      isAvailable: true
    }
  ],
  bookings: []
}

export default mock
