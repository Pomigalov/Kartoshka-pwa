import React, {useState} from 'react'

export default function MyEquipment({owner, data, onSave}){
  const [form, setForm] = useState({title:'', description:'', pricePerDay:200, address:'', lat:55.751, lng:37.617})
  const submit = () => {
    const eq = {
      id: 'e_'+Date.now(),
      title: form.title || 'Без названия',
      description: form.description,
      pricePerDay: Number(form.pricePerDay),
      address: form.address,
      lat: Number(form.lat),
      lng: Number(form.lng),
      images: [],
      ownerId: owner?.id || 'local_owner',
      isAvailable: true
    }
    onSave(eq)
    setForm({title:'', description:'', pricePerDay:200, address:'', lat:55.751, lng:37.617})
    alert('Объявление добавлено (локально).')
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-3">Моя техника</h3>
      <div className="mb-2">Добавить новое объявление</div>
      <input className="w-full p-2 border rounded mb-2" placeholder="Название" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
      <textarea className="w-full p-2 border rounded mb-2" placeholder="Описание" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
      <div className="grid grid-cols-3 gap-2 mb-2">
        <input className="p-2 border rounded" placeholder="Цена в ₽/день" value={form.pricePerDay} onChange={e=>setForm({...form, pricePerDay:e.target.value})} />
        <input className="p-2 border rounded" placeholder="lat" value={form.lat} onChange={e=>setForm({...form, lat:e.target.value})} />
        <input className="p-2 border rounded" placeholder="lng" value={form.lng} onChange={e=>setForm({...form, lng:e.target.value})} />
      </div>
      <input className="w-full p-2 border rounded mb-2" placeholder="Адрес" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} />
      <div className="flex space-x-2">
        <button onClick={submit} className="p-2 bg-blue-600 text-white rounded">Опубликовать</button>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold mb-2">Твои объявления (локально)</h4>
        <div className="space-y-2">
          {data.equipment.filter(e=> e.ownerId === (owner?.id || 'local_owner')).map(e=>(
            <div key={e.id} className="p-2 border rounded">
              <div className="font-bold">{e.title}</div>
              <div className="text-sm text-gray-600">{e.address} — {e.pricePerDay}₽/день</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
