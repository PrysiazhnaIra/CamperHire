import Header from '../Header/Header.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader.js';
import { api } from '../../config/api.js';
import CamperSubInfo from '../CamperSubInfo/CamperSubInfo.js';
import CamperFeatures from '../CamperFeatures/CamperFeatures.js';
import CamperReviews from '../CamperReviews/CamperReviews.js';
import FormCamperBook from '../FormCamperBook/FormCamperBook.js';
import GoBackBtn from '../GoBackBtn/GoBackBtn.js';
import css from './CamperDetails.module.css';

export default function CamperDetails() {
  const { id } = useParams();
  const [camperData, setCamperData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  console.log('camperData:', camperData);

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

        <div className={css.infoContainer}>
          <div className={css.infoBlock}>
            {activeTab === 'features' ? (
              <CamperFeatures item={camperData} />
            ) : (
              <CamperReviews reviews={camperData.reviews} />
            )}
          </div>

          <FormCamperBook />
        </div>
        <div className={css.goBackBtn}>
          <GoBackBtn />
        </div>
      </div>
    </>
  );
}
