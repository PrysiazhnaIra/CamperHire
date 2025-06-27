import { useEffect, useState } from 'react';
import css from './Filters.module.css';
import sprite from '../../img/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/camper/operations';
import { selectAllCampers } from '../../redux/camper/selectors';
import { filterActions } from '../../redux/filter/slice';
import {
  selectCity,
  selectEquipment,
  selectType,
} from '../../redux/filter/selectors';
import { RootState, AppDispatch } from '../../redux/store';
import { CamperData } from '../../types/camper';
import { CamperFilters } from '../../types/filter';

interface FilterOption {
  id: string;
  label: string;
  icon: string;
}

interface FiltersProps {}

export default function Filters({}: FiltersProps) {
  const dispatch: AppDispatch = useDispatch();

  const campers: CamperData[] = useSelector(selectAllCampers);
  const city: string = useSelector(selectCity);
  const equipment: string[] = useSelector(selectEquipment);
  const type: string = useSelector(selectType);

  useEffect(() => {
    handleSearch();
  }, [dispatch, city, equipment, type]);

  const equipmentOptions: FilterOption[] = [
    { id: 'AC', label: 'AC', icon: 'icon-ac' },
    { id: 'automatic', label: 'Automatic', icon: 'icon-automatic' },
    { id: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { id: 'TV', label: 'TV', icon: 'icon-tv' },
    { id: 'bathroom', label: 'Bathroom', icon: 'icon-bathroom' },
  ];

  const typeOptions: FilterOption[] = [
    { id: 'panelTruck', label: 'Van', icon: 'icon-van' },
    {
      id: 'fullyIntegrated',
      label: 'Fully Integrated',
      icon: 'icon-fully-integrated',
    },
    { id: 'alcove', label: 'Alcove', icon: 'icon-alcove' },
  ];

  const setCity = (city: string) => {
    dispatch(filterActions.setLocation(city));
  };

  const handleEquipmentClick = (id: any) => {
    let updatedEquipment = [];
    if (equipment.includes(id)) {
      updatedEquipment = equipment.filter(item => item != id);
    } else {
      updatedEquipment = [...equipment];
      updatedEquipment.push(id);
    }
    dispatch(filterActions.setEquipment(updatedEquipment));
  };

  const handleTypeClick = (id: any) => {
    dispatch(filterActions.setType(id));
  };

  const handleSearch = () => {
    const filters = equipment.reduce((acc: CamperFilters, item: string) => {
      if (item === 'AC') acc.AC = true;
      if (item === 'automatic') acc.automatic = true;
      if (item === 'kitchen') acc.kitchen = true;
      if (item === 'TV') acc.TV = true;
      if (item === 'bathroom') acc.bathroom = true;
      if (item === 'gas') acc.gas = true;
      if (item === 'microwave') acc.microwave = true;
      if (item === 'radio') acc.radio = true;
      if (item === 'refrigerator') acc.refrigerator = true;
      return acc;
    }, {} as CamperFilters);

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
