// import dayjs from 'dayjs';
import currencyFormatter from 'currency-formatter';
import {TCurrency} from 'types/FormatingType';

// export const formatDateClient = (
//   date: string | Date | number,
//   format = 'DD MMM YYYY',
// ) => {
//   const parseDate = dayjs(date);
//   if (!parseDate.isValid()) {
//     return '';
//   }

//   return parseDate.format(format);
// };

// export const getNextXDayString = (format = 'YYYY-MM-DD', xDay = 1) => {
//   return dayjs().add(xDay, 'day').format(format);
// };

// export const currentDateString = (format = 'YYYY-MM-DD') => {
//   return dayjs().format(format);
// };

export const currency = ({
  val,
  unformat,
  symbolNon,
  precision,
  ifNull,
}: TCurrency) => {
  precision = precision || 0;
  let symbol = 'Rp ';
  if (symbolNon) {
    symbol = '';
  }

  if (precision === undefined) {
    precision = '2.';
  }

  let format = {symbol, thousand: '.', decimal: ',', precision};
  let result = 0;
  if (unformat) {
    val = `${val || ''}`.split(format.thousand || '').join('');
    result = currencyFormatter.unformat(val || 0, format);
  } else {
    result = currencyFormatter.format(val || 0, format);
  }

  if (ifNull && result.toString() === '0') {
    return '-';
  }
  if (unformat?.toString() === 'format') {
    return format;
  }
  return result;
};

// export const phoneFormated = ({
//   countryCode = '62',
//   phoneNumber,
// }: {
//   countryCode?: string;
//   phoneNumber: string;
// }) => {
//   if (phoneNumber.startsWith('0')) {
//     const trimmedNumber = phoneNumber.replace(/^0+/, '');

//     return countryCode + trimmedNumber;
//   }

//   return phoneNumber;
// };
