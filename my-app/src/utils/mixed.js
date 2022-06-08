export const getMonths = () => [
  { value: 1, label: 'Enero' },
  { value: 2, label: 'Febrero' },
  { value: 3, label: 'Marzo' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Mayo' },
  { value: 6, label: 'Junio' },
  { value: 7, label: 'Julio' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Setiembre' },
  { value: 10, label: 'Octubre' },
  { value: 11, label: 'Noviembre' },
  { value: 12, label: 'Diciembre' },
];

export const getDays = () => [...Array(31)].map((item, index) => ({
  value: index + 1,
  label: index + 1,
}));

// [...Array(10).keys()].slice(1)
export const getYears = (numberOfYears = 121, prefixLabel = '') => {
  let currentYear = new Date().getFullYear(); // 2022

  const pastYears = [...Array(numberOfYears)].map((item, index) => {
    currentYear -= (index > 0 ? 1 : 0);
    return {
      value: currentYear,
      label: `${prefixLabel} ${currentYear}`,
    };
  });

  return pastYears;
};
