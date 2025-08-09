import React from 'react'

export default function Header({user, onLogout}){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center text-white font-bold">К</div>
          <div>
            <div className="font-bold">Картошка</div>
            <div className="text-xs text-gray-500">Аренда дачной техники между соседями</div>
          </div>
        </div>
        <div>
          {user ? (
            <div className="flex items-center space-x-2">
              <div className="text-sm">{user.name}</div>
              <button className="text-sm text-red-500" onClick={onLogout}>Выйти</button>
            </div>
          ) : (
            <div className="text-sm text-gray-500">Гость</div>
          )}
        </div>
      </div>
    </header>
  )
}
