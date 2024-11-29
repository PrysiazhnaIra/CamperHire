import EquipmentList from '../EquipmentList/EquipmentList.jsx';

export default function CamperFeatures({ item }) {
  return (
    <div>
      <EquipmentList item={item} />
      <h3>Vehicle details</h3>
    </div>
  );
}
