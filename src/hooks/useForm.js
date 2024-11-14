// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = (fieldValues = values) => {
    let tempErrors = { ...errors };
    if ('email' in fieldValues)
      tempErrors.email = /$^|.+@.+..+/.test(fieldValues.email) ? '' : 'Email is not valid.';
    if ('password' in fieldValues)
      tempErrors.password = fieldValues.password.length > 5 ? '' : 'Minimum 6 characters required.';

    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
