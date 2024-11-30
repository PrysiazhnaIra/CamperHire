import Header from '../Header/Header.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Loader from '../Loader/Loader.jsx';
import { api } from '../../config/api.js';
import CamperSubInfo from '../CamperSubInfo/CamperSubInfo.jsx';
import CamperFeatures from '../CamperFeatures/CamperFeatures.jsx';
import CamperReviews from '../CamperReviews/CamperReviews.jsx';
import Form from '../Form/Form.jsx';
import css from './CamperDetails.module.css';

export default function CamperDetails() {
  const { id } = useParams();
  const [camperData, setCamperData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCamper() {
      try {
        const response = await api.get(`/campers/${id}`);
        console.log('Response:', response);
        setCamperData(response.data);
      } catch (error) {
        console.error('ErrorMessage:', error);
      }
    }

    fetchCamper();
  }, []);

  return (
    <>
      <Header />
      <div className={css.detailsBlock}>
        {/* {isLoading && (
          <div>
            <Loader />
          </div>
        )} */}
        <h1>{camperData.name}</h1>
        <CamperSubInfo item={camperData} />
        <p>€{camperData.price}</p>
        <p className={css.description}>{camperData.description}</p>
        {/* <CamperFeatures />
        <CamperReviews /> */}
        {/* <Form /> */}
      </div>
    </>
  );
}
