import React, { useState } from 'react';

function BookingBlock({ icon, label, value, onChange }) {
  
    return (
      <div style={{ background: 'rgba(193, 112, 121, 0.33)', /* ... */ }}>
        <img src={icon} alt={label} style={{ /* ... */ }} />
        <div style={{ /* ... */ }}>{value}</div>
        {/* Логика для выбора значения */}
      </div>
    );
  }
  