# Etch-a-Sketch

## 🖌️ Overview

This is a browser-based **Etch-a-Sketch** application built with HTML, CSS, and JavaScript. It features an interactive grid that users can draw on by hovering over squares. The grid can be resized dynamically, reset, and toggled between two drawing modes: random color and progressive darkening.

---

## ✨ Features

- **Interactive Drawing Grid**: Hover over grid squares to color them.
- **Dynamic Grid Size**: Enter a custom size (up to 100×100) for the drawing grid.
- **Color Modes**:
  - *Random Color*: Assigns a random RGB color to each square on hover.
  - *Darken Mode*: Each hover darkens the square incrementally until fully black.
- **Reset Button**: Clears the grid without changing its size.
- **Smooth Transitions**: Hover effects are animated for visual polish.
- **Responsive Layout**: Grid scales to fit a fixed display area regardless of size.

---

## 🛠️ Setup

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Use the control buttons to draw, reset, or resize the grid.

**File structure:**

/etch-a-sketch
├── index.html
├── style.css
└── script.js


---

## 📦 How It Works

### 🎨 Drawing Mechanism
- Each grid square listens for a `mouseover` event.
- Depending on the selected mode, the square's color is either randomized or darkened.

### 📏 Grid Resizing
- Clicking "Set Grid Size" prompts the user for a number (max 100).
- A new grid is generated with that number of squares per side.
- Square size adjusts to maintain a consistent container size (e.g., 600px x 600px).

### 🔄 Resetting the Grid
- Clicking "Reset Grid" clears all colors and resets the drawing state.

### ⚙️ Mode Toggle
- The "Mode" button toggles between:
  - **Random Color Mode**: Applies a new random color on each hover.
  - **Darken Mode**: Increases square darkness by 10% on each hover until fully black.

---

## 🔮 Future Enhancements

- Add a color picker or custom color palette.
- Save and load drawings from local storage.
- Add mobile touch support.
- Display hover count or darken progress on each square.
- Animate grid creation or apply fade-in effects.

---

## 📄 License

This project is for educational and personal learning purposes.

## 📦 How It Works

### 🎨 Drawing Mechanism
- Each grid square listens for a `mouseover` event.
- Depending on the selected mode, the square's color is either randomized or darkened.

### 📏 Grid Resizing
- Clicking "Set Grid Size" prompts the user for a number (max 100).
- A new grid is generated with that number of squares per side.
- Square size adjusts to maintain a consistent container size (e.g., 600px x 600px).

### 🔄 Resetting the Grid
- Clicking "Reset Grid" clears all colors and resets the drawing state.

### ⚙️ Mode Toggle
- The "Mode" button toggles between:
  - **Random Color Mode**: Applies a new random color on each hover.
  - **Darken Mode**: Increases square darkness by 10% on each hover until fully black.

---

## 🔮 Future Enhancements

- Add a color picker or custom color palette.
- Save and load drawings from local storage.
- Add mobile touch support.
- Display hover count or darken progress on each square.
- Animate grid creation or apply fade-in effects.

---

## 📄 License

This project is for educational and personal learning purposes.