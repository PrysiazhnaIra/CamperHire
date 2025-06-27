import css from './EquipmentList.module.css';
import sprite from '../../img/icons.svg';

export default function EquipmentList({
  item,
}: {
  item: Record<string, boolean>;
}) {
  const equipmentIcons = [
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
