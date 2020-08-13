const formatDateValue = (value: Date): string =>
  new Date(value).toLocaleDateString('pt-BR');

export default formatDateValue
