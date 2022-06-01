import React, { useState } from 'react';
import Select from 'react-select';
import { getMonths, getDays, getYears } from '../utils/mixed';

function Register() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    month: '',
    day: '',
    year: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSelectChange = (event, name) => {
    setForm({
      ...form,
      [name]: event.value,
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ form });
  };

  return (
    <div>
      <h1>Crear cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Fecha de nacimiento</label>
          <div>
            <Select
              placeholder="Mes"
              options={getMonths()}
              onChange={(event) => handleSelectChange(event, 'month')}
            />
            <Select
              placeholder="Día"
              options={getDays()}
              onChange={(event) => handleSelectChange(event, 'day')}
            />
            <Select
              placeholder="Año"
              options={getYears()}
              onChange={(event) => handleSelectChange(event, 'year')}
            />
          </div>
        </div>
        <button type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default Register;