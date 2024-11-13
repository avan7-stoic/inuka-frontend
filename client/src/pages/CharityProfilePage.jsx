// src/pages/CharityProfilePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
// import CharityDetails from '../components/Charity/CharityDetails';
// import BeneficiaryStories from '../components/Charity/BeneficiaryStories';
// import DonationSummary from '../components/Charity/DonationSummary';

function CharityProfilePage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Charity Profile</h1>
      {/* <CharityDetails charityId={id} />
      <BeneficiaryStories charityId={id} />
      <DonationSummary charityId={id} /> */}
      {/* Additional info such as events, volunteer opportunities, etc., could go here */}
    </div>
  );
}

export default CharityProfilePage;
