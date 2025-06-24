import { useEffect, useState } from 'react';
import css from './Filters.module.css';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/camper/operations.js';
import { selectAllCampers } from '../../redux/camper/selectors.js';
import { filterActions } from '../../redux/filter/slice.js';
import {
  selectCity,
  selectEquipment,
  selectType,
} from '../../redux/filter/selectors.js';

export default function Filters() {
  const dispatch = useDispatch();

  const campers = useSelector(selectAllCampers);
  const city = useSelector(selectCity);
  const equipment = useSelector(selectEquipment);
  const type = useSelector(selectType);

  useEffect(() => {
    handleSearch();
  }, []);

  const equipmentOptions = [
    { id: 'AC', label: 'AC', icon: 'icon-ac' },
    { id: 'automatic', label: 'Automatic', icon: 'icon-automatic' },
    { id: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { id: 'TV', label: 'TV', icon: 'icon-tv' },
    { id: 'bathroom', label: 'Bathroom', icon: 'icon-bathroom' },
  ];

  const typeOptions = [
    { id: 'panelTruck', label: 'Van', icon: 'icon-van' },
    {
      id: 'fullyIntegrated',
      label: 'Fully Integrated',
      icon: 'icon-fully-integrated',
    },
    { id: 'alcove', label: 'Alcove', icon: 'icon-alcove' },
  ];

  const setCity = city => {
    dispatch(filterActions.setLocation(city));
  };

  const handleEquipmentClick = id => {
    let updatedEquipment = [];
    if (equipment.includes(id)) {
      updatedEquipment = equipment.filter(item => item != id);
    } else {
      updatedEquipment = [...equipment];
      updatedEquipment.push(id);
    }
    dispatch(filterActions.setEquipment(updatedEquipment));
  };

  const handleTypeClick = id => {
    dispatch(filterActions.setType(id));
  };

  const handleSearch = () => {
    const filters = equipment.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {});
    if (city) {
      filters.location = city;
    }
    if (type) {
      filters.form = type;
    }
    dispatch(fetchCampers(filters));
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
        <hr className={css.divider} />
        <div className={css.icons}>
          {equipmentOptions.map(option => (
            <button
              key={option.id}
              type="button"
              className={`${css.iconBtn} ${
                equipment.includes(option.id) ? css.selected : ''
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
      <hr className={css.divider} />
      <div className={css.icons}>
        {typeOptions.map(option => (
          <button
            key={option.id}
            type="button"
            className={`${css.iconBtn} ${
              type === option.id ? css.selected : ''
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
