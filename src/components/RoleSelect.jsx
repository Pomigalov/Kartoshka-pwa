import React, {useState} from 'react'

export default function RoleSelect({onChoose}){
  const [name, setName] = useState('')
  const choose = (role) => {
    const u = { id: 'local_'+Date.now(), name: name||'Аноним', role }
    onChoose(u)
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Кем вы хотите быть в этом сезоне?</h2>
      <p className="text-sm text-gray-600 mb-4">Выберите роль — её всегда можно поменять в профиле.</p>
      <input className="w-full p-2 border rounded mb-4" placeholder="Ваше имя (необязательно)" value={name} onChange={e=>setName(e.target.value)} />
      <div className="grid grid-cols-2 gap-4">
        <button onClick={()=>choose('renter')} className="p-4 bg-green-500 text-white rounded">Я арендую</button>
        <button onClick={()=>choose('owner')} className="p-4 bg-blue-600 text-white rounded">Я сдаю</button>
      </div>
    </div>
  )
}
