import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader({ width, height }) {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height={height || 80}
        width={width || 80}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
}
