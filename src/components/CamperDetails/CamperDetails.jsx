import Header from '../Header/Header.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import { api } from '../../config/api.js';
import CamperSubInfo from '../CamperSubInfo/CamperSubInfo.jsx';
import CamperFeatures from '../CamperFeatures/CamperFeatures.jsx';
import CamperReviews from '../CamperReviews/CamperReviews.jsx';
import Form from '../Form/Form.jsx';
import css from './CamperDetails.module.css';

export default function CamperDetails() {
  const { id } = useParams();
  const [camperData, setCamperData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    async function fetchCamper() {
      try {
        setIsLoading(true);
        const response = await api.get(`/campers/${id}`);
        setCamperData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('ErrorMessage:', error);
        setIsLoading(false);
      }
    }

    fetchCamper();
  }, []);

  return (
    <>
      <Header />
      <div className={css.detailsBlock}>
        <h1 className={css.title}>{camperData.name}</h1>
        <CamperSubInfo item={camperData} />
        <p className={css.price}>€{camperData.price}</p>

        <div className={css.gallery}>
          {isLoading && (
            <div>
              <Loader />
            </div>
          )}
          {camperData.gallery?.slice(0, 3).map((image, index) => {
            const imgSrc = image.thumb || '/img/default-image.jpg';
            return (
              <img
                key={index}
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                className={css.galleryImage}
                onError={e => {
                  e.target.src = '/img/default-image.jpg';
                }}
              />
            );
          })}
        </div>

        <p className={css.description}>{camperData.description}</p>

        <div className={css.subTitleBtnBlock}>
          <button
            className={`${css.subTitleBtn} ${
              activeTab === 'features' ? css.active : ''
            }`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button
            className={`${css.subTitleBtn} ${
              activeTab === 'reviews' ? css.active : ''
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>

        <div className={css.lineWrapper}>
          <div className={css.line}></div>
          <div
            className={`${css.activeLine} ${
              activeTab === 'features' ? css.activeFeatures : css.activeReviews
            }`}
          ></div>
        </div>

        <div className={css.infoBlock}>
          {activeTab === 'features' ? (
            <CamperFeatures item={camperData} />
          ) : (
            <CamperReviews reviews={camperData.reviews} />
          )}
        </div>

        {/* <Form /> */}
      </div>
    </>
  );
}
