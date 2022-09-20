import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
// import { StyledBtn } from 'components/Button/Button';
import { Chip } from '@mui/material';

const ContactsItem = ({ name, number, id, onClick }) => {
  const [disabledId, setDisabledId] = useState('');
  const isLoading = useSelector(state => state.contacts.loading);

  const isDeleting = () => {
    if (isLoading) {
      return disabledId === id;
    }
  };
  return (
    <li>
      <p>
        {name}: {number}{' '}
        <Chip
          label="Delete"
          disabled={isDeleting()}
          onClick={() => {
            onClick(id);
            setDisabledId(id);
          }}
          type="button"
          icon={<DeleteIcon />}
        ></Chip>
      </p>
    </li>
  );
};

export default ContactsItem;
