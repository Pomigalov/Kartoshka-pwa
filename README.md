# Картошка — MVP PWA (версия 2)

Этот проект — готовый Vite + React + Tailwind прототип приложения для аренды дачной техники.
Он использует localStorage (чтобы можно было тестировать без Firebase) и Leaflet (OpenStreetMap) для карты.

## Быстрый старт (локально)
1. Установи Node.js (рекомендуется 18+).
2. Распакуй проект и в терминале в папке проекта выполни:
```
npm install
npm run dev
```
3. Открой http://localhost:5173

## Деплой на Vercel (шаги)
1. Создай репозиторий на GitHub и загрузите файлы (см. шаги в чате).
2. В Vercel нажми **Import Project** → подключи GitHub → выбери репозиторий `kartoshka-pwa`.
3. Framework Preset: `Vite`. Build: `npm run build`. Output Dir: `dist`. Нажми Deploy.

## Замена localStorage на Firebase
Если хочешь, я могу подготовить ветку с готовой интеграцией Firebase (Auth + Firestore + Storage).

---
Требуется помощь с загрузкой на GitHub / деплоем — напиши, пройдем вместе по шагам.
