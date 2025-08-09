import React, {useState} from 'react'

export default function EquipmentCard({eq, onBook}){
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const handleBook = () => {
    if(!start || !end){ alert('Выберите даты'); return }
    const s = new Date(start)
    const e = new Date(end)
    const days = Math.max(1, Math.ceil((e - s)/(1000*60*60*24)) + 1)
    const total = days * eq.pricePerDay
    const booking = {
      id: 'b_'+Date.now(),
      equipmentId: eq.id,
      title: eq.title,
      start,
      end,
      total,
      status: 'pending'
    }
    onBook(booking)
    alert('Бронь создана (локально). Сумма: ' + total + '₽')
  }

  return (
    <div className="bg-white p-4 rounded shadow max-w-xl">
      <h3 className="text-lg font-bold mb-2">{eq.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{eq.description}</p>
      <div className="mb-2">Цена: <strong>{eq.pricePerDay}₽/день</strong></div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <input type="date" value={start} onChange={e=>setStart(e.target.value)} className="p-2 border rounded" />
        <input type="date" value={end} onChange={e=>setEnd(e.target.value)} className="p-2 border rounded" />
      </div>
      <div className="flex space-x-2">
        <button onClick={handleBook} className="p-2 bg-green-500 text-white rounded">Забронировать</button>
        <button className="p-2 border rounded">Написать владельцу</button>
      </div>
    </div>
  )
}
