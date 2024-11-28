import React, { useState } from 'react';
import css from './Filters.module.css';
import sprite from '../../img/icons.svg';

export default function Filters() {
  const [city, setCity] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const equipmentOptions = [
    { id: 'ac', label: 'AC', icon: 'icon-ac' },
    { id: 'automatic', label: 'Automatic', icon: 'icon-automatic' },
    { id: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { id: 'tv', label: 'TV', icon: 'icon-tv' },
    { id: 'bathroom', label: 'Bathroom', icon: 'icon-bathroom' },
  ];

  const typeOptions = [
    { id: 'van', label: 'Van', icon: 'icon-van' },
    {
      id: 'fully-integrated',
      label: 'Fully Integrated',
      icon: 'icon-fully-integrated',
    },
    { id: 'alcove', label: 'Alcove', icon: 'icon-alcove' },
  ];

  const handleEquipmentClick = id => {
    setSelectedEquipment(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleTypeClick = id => {
    setSelectedType(id);
  };

  const handleSearch = () => {
    const filters = {
      city,
      equipment: selectedEquipment,
      type: selectedType,
    };
    onSearch(filters);
  };

  return (
    <div className={css.block}>
      <div className={css.inputContainer}>
        <label className={css.blockName}>Location</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="City"
          className={css.input}
        />
        <svg className={css.map} width="20" height="20">
          <use href={`${sprite}#icon-map`} />
        </svg>
      </div>

      <div>
        <p className={css.blockName}>Filters</p>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.icons}>
          {equipmentOptions.map(option => (
            <button
              key={option.id}
              type="button"
              className={`${css.iconBtn} ${
                selectedEquipment.includes(option.id) ? css.selected : ''
              }`}
              onClick={() => handleEquipmentClick(option.id)}
            >
              <svg width="32" height="32" className={css.icon}>
                <use href={`${sprite}#${option.icon}`} />
              </svg>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.icons}>
        {typeOptions.map(option => (
          <button
            key={option.id}
            type="button"
            className={`${css.iconBtn} ${
              selectedType === option.id ? css.selected : ''
            }`}
            onClick={() => handleTypeClick(option.id)}
          >
            <svg width="32" height="32" className={css.icon}>
              <use href={`${sprite}#${option.icon}`} />
            </svg>
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <button type="button" className={css.btn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}