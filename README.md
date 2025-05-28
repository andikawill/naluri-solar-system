# 🌞 Naluri Solar System - Pi Calculator & Sun Circumference App

This project is a solution for the Naluri coding challenge to model part of the solar system by calculating π (Pi) to increasing precision and using it to compute the Sun’s circumference.

---

## 🧠 Problem Summary

- **Goal**: Calculate π algorithmically and display it with increasing precision (e.g. 3, 3.1, 3.14, ...).
- **Backend**: Calculates π using a Machin-like arctangent formula.
- **Frontend**: Displays current value of π, number of terms used, digit precision, and the Sun’s circumference with animated solar visualization.

---

## 🛠️ Tech Stack

| Layer     | Tech Used               |
|-----------|-------------------------|
| Frontend  | React Native (Expo) + React Native Elements |
| Backend   | NestJS (Node.js + TypeScript) |
| CI/CD     | GitHub Actions          |

---

## 🧮 π Calculation

- Based on **Machin-like arctangent formula**:

  ```
  π = 16 * arctan(1/5) - 4 * arctan(1/239)
  ```

- The server calculates Pi in increasing precision every second using the number of terms and stores the most accurate result.

---

## 🚀 How to Run Locally

### 1. Clone the Project

```bash
git clone https://github.com/andikawill/naluri-solar-system.git
cd naluri-solar-system
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm run start
```

API will be available at: `http://localhost:3000/pi`

---

### 3. Frontend Setup (Expo)

```bash
cd frontend
npm install
npx expo start
```

You can scan the QR code using the Expo Go app or run on a simulator.

---

## 📦 API

### `GET /pi`

Returns the latest known value of π:

```json
{
  "pi": 3.14159,
  "terms": 352,
  "updatedAt": "2025-05-28T10:24:30.000Z"
}
```

---

## 🧪 Testing

### Backend:

```bash
cd backend
npm run test
```

---

## ⚙️ CI/CD

- Backend and frontend have separate GitHub Actions workflows for:
  - Linting
  - Type checking
  - Running unit tests (backend)

---

## 🎨 UI Features

- Animated rotating Sun
- Parallax scrolling background (sky with stars)
- Real-time display of π and Sun circumference
- Glassmorphism card for elegant overlay

---

## 📐 Sun Circumference Formula

```ts
circumference = π × diameter
diameter = 1,392,700 km
```

---

## 💡 Future Improvements

- Add persistent DB for π value
- Add animation for digits appearing
- Live WebSocket for frontend updates
- Unit toggle (km ↔︎ miles)

---

## 📁 Project Structure

```
├── backend/            # NestJS API server
├── frontend/           # React Native app with Expo
├── .github/workflows/  # CI/CD for backend & frontend
├── README.md
```

---

## 📄 License

MIT License