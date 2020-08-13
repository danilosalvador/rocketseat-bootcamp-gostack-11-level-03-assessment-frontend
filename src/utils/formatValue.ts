const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

// export const formatDateValue = (value: Date): string =>
//   Intl.DateTimeFormat('pt-BR').format(new Date(value));

export default formatValue
