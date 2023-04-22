import React from 'react'

const d = new Date();
let year = d.getFullYear();

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright @ {year}</p>
        <p>Ankush</p>

      </footer>
    </div>
  )
}
