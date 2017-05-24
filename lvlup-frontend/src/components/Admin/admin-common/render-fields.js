import React, { Component } from 'react';

export const renderField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

export const renderTextAreaField = ({ input, placeholder, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

export const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export const categories = [
  { key: 'Education', text: 'Education', value: '1' },
  { key: 'Community', text: 'Community', value: '2' },
  { key: 'Career', text: 'Career', value: '3' },
  { key: 'Life', text: 'Life', value: '4' },
];
