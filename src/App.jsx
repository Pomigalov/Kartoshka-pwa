import React, {useState, useEffect} from 'react'
import RoleSelect from './components/RoleSelect'
import MapScreen from './components/MapScreen'
import MyEquipment from './components/MyEquipment'
import Header from './components/Header'
import mock from './mock-data'

export default function App(){
  const [user, setUser] = useState(null) // {name, role}
  const [screen, setScreen] = useState('role') // role, map, my
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('kartoshka_data')
    return saved ? JSON.parse(saved) : mock
  })

  useEffect(()=> {
    localStorage.setItem('kartoshka_data', JSON.stringify(data))
  }, [data])

  useEffect(()=> {
    if(user?.role === 'renter') setScreen('map')
    if(user?.role === 'owner') setScreen('my')
  }, [user])

  const saveEquipment = (eq) => {
    setData(prev => ({ ...prev, equipment: [eq, ...prev.equipment] }))
  }

  const createBooking = (booking) => {
    setData(prev => ({ ...prev, bookings: [booking, ...prev.bookings] }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={()=>{ setUser(null); setScreen('role')}} />
      <div className="container mx-auto p-4">
        {screen === 'role' && <RoleSelect onChoose={(u)=>{ setUser(u) }} />}
        {screen === 'map' && <MapScreen data={data} onCreateBooking={createBooking} />}
        {screen === 'my' && <MyEquipment owner={user} data={data} onSave={saveEquipment} />}
      </div>
      <footer className="text-center text-sm text-gray-500 p-4">Картошка — MVP. Локальная демонстрация.</footer>
    </div>
  )
}
