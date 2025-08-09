import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import EquipmentCard from './EquipmentCard'

export default function MapScreen({data, onCreateBooking}){
  const [selected, setSelected] = useState(null)
  const center = [data.equipment[0]?.lat || 52.232, data.equipment[0]?.lng || 21.012]

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex-1">
          <input placeholder="Поиск по названию или адресу" className="w-full p-2 border rounded" />
        </div>
        <div className="ml-3">
          <button className="p-2 border rounded">Фильтры</button>
        </div>
      </div>

      <MapContainer center={center} zoom={14} scrollWheelZoom style={{height: '50vh'}} className="rounded-lg">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.equipment.map(eq => (
          <Marker key={eq.id} position={[eq.lat, eq.lng]} eventHandlers={{ click: ()=> setSelected(eq) }}>
            <Popup>{eq.title}<br/>{eq.pricePerDay}₽/день</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="mt-4">
        {selected ? (
          <EquipmentCard eq={selected} onBook={(b)=>{ onCreateBooking(b); setSelected(null) }} />
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {data.equipment.map(eq => <div key={eq.id} className="bg-white p-4 rounded shadow">{eq.title} — {eq.pricePerDay}₽/день</div>)}
          </div>
        )}
      </div>
    </div>
  )
}
