import Header from '../../components/Header/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { api } from '../../config/api';
import CamperSubInfo from '../../components/CamperSubInfo/CamperSubInfo';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import CamperReviews from '../../components/CamperReviews/CamperReviews';
import FormCamperBook from '../../components/FormCamperBook/FormCamperBook';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import css from './CamperDetailsPage.module.css';
import {
  CamperData,
  CamperGalleryItem,
  CamperReview,
} from '../../types/camper';
import toast from 'react-hot-toast';

export default function CamperDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [camperData, setCamperData] = useState<CamperData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'features' | 'reviews'>(
    'features'
  );

  useEffect(() => {
    async function fetchCamper() {
      if (!id) {
        console.error('No camper ID provided');
        toast.error('No camper ID provided');
        return;
      }
      try {
        setIsLoading(true);
        const response = await api.get(`/campers/${id}`);
        setCamperData(response.data);
      } catch (error: any) {
        console.error('ErrorMessage:', error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCamper();
  }, [id]);

  if (isLoading || !camperData) {
    return (
      <>
        <Header />
        <div className={css.loaderContainer}>
          <Loader />
        </div>
      </>
    );
  }

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
                onError={(e: any) => {
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
