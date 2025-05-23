import React from 'react';

export default function Toolbar({ icons, bottomIcons, hovered, setHovered }) {
  return (
    <div
      className={`tool-bar ${hovered ? 'tool-bar-expanded' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='tool-bar-top scrollable'>
        {icons.map((icon, i) => (
          <div key={i} className='tool-bar-container' id={icon.active ? 'tool-bar-active' : ''}>
            <img className='tool-bar-logos' src={icon.src} alt={icon.title} />
            <span className='tool-bar-label'>{icon.title}</span>
          </div>
        ))}
      </div>
      <div className='tool-bar-bottom scrollable'>
        {bottomIcons.map((icon, i) => (
          <div key={i} className='tool-bar-container'>
            <img className='tool-bar-logos' src={icon.src} alt={icon.title} />
            <span className='tool-bar-label'>{icon.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
