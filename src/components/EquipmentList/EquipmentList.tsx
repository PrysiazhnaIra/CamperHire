import css from './EquipmentList.module.css';
import sprite from '../../img/icons.svg';
import { CamperData } from '../../types/camper';

interface EquipmentListProps {
  item: CamperData;
}

type EquipmentBooleanKey =
  | 'AC'
  | 'bathroom'
  | 'kitchen'
  | 'TV'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

interface EquipmentIcon {
  key: EquipmentBooleanKey;
  label: string;
  icon: string;
}

export default function EquipmentList({ item }: EquipmentListProps) {
  const equipmentIcons: EquipmentIcon[] = [
    { key: 'AC', label: 'Air Conditioning', icon: 'icon-ac' },
    { key: 'bathroom', label: 'Bathroom', icon: 'icon-bathroom' },
    { key: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { key: 'TV', label: 'TV', icon: 'icon-tv' },
    { key: 'radio', label: 'Radio', icon: 'icon-radio' },
    { key: 'refrigerator', label: 'Refrigerator', icon: 'icon-fridge' },
    { key: 'microwave', label: 'Microwave', icon: 'icon-microwave' },
    { key: 'gas', label: 'Gas', icon: 'icon-stove' },
    { key: 'water', label: 'Water Supply', icon: 'icon-water' },
  ];

  return (
    <div className={css.equipmentBlock}>
      {equipmentIcons.map(({ key, label, icon }) =>
        item[key] ? (
          <div key={key} className={css.equipmentItem}>
            <svg className={css.icon} width="24" height="24">
              <use href={`${sprite}#${icon}`} />
            </svg>
            <span className={css.label}>{label}</span>
          </div>
        ) : null
      )}
    </div>
  );
}
