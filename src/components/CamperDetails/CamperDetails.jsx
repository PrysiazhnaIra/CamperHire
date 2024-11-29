import Header from '../Header/Header.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Loader from '../Loader/Loader.jsx';
import { api } from '../../config/api.js';
import CamperSubInfo from '../CamperSubInfo/CamperSubInfo.jsx';

export default function CamperDetails({ item }) {
  const { id } = useParams();
  const [camperData, setCamperData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api
        .get(`/campers/${id}`)
        .then(response => {
          setCamperData(response.data);
        })
        .catch(err => console.log('Error:', err));
    }
  }, []);

  return (
    <>
      <Header />
      <div>
        {/* {isLoading && (
          <div>
            <Loader />
          </div>
        )} */}
        <h1>{camperData.name}</h1>
        <CamperSubInfo item={item} />
        <p>€{camperData.price}</p>
        <p>{camperData.description}</p>
      </div>
    </>
  );
}
