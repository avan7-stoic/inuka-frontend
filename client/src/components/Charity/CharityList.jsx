import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharityRequests } from '../../redux/slices/charitySlice';

const CharityList = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.charity.requests);

  useEffect(() => {
    dispatch(getCharityRequests());
  }, [dispatch]);

  return (
    <div>
      <h2>Charity List</h2>
      <ul>
        {requests.map((charity) => (
          <li key={charity.id}>{charity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharityList;
