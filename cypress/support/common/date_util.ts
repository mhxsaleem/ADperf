export const getPreviosDateFromCurrentDate = (inputDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const currentDate = new Date();
  const previousDate = new Date(currentDate.getTime() - Number(inputDate) * 24 * 60 * 60 * 1000).toLocaleDateString(
    'en-US',
    options,
  );
  // cy.log('previousDate: ' + previousDate);

  return previousDate;
};

export const getDateFrominputDate = (inputDate: string, inputNumber: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const dayDate = new Date(inputDate);
  dayDate.setDate(dayDate.getDate() + Number(inputNumber));
  // cy.log('offsetDate: ' + dayDate.toLocaleDateString('en-US', options));

  return dayDate.toLocaleDateString('en-US', options);
};

export const getMonthFrominputDate = (inputDate: string, inputNumber: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const monthDate = new Date(inputDate);
  monthDate.setDate(monthDate.getDate() + Number(inputNumber));

  return monthDate.toLocaleDateString('en-US', options);
};

export const getYearFrominputDate = (inputDate: string, inputNumber: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const yearDate = new Date(inputDate);
  yearDate.setFullYear(yearDate.getFullYear() + Number(inputNumber));

  return yearDate.toLocaleDateString('en-US', options);
};

export const getWarranty = (inputDate: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  let warrantyTxt = 'NoOffer';
  const currentDate = new Date();
  const dateDiff = (currentDate.setHours(0, 0, 0, 0) - Date.parse(inputDate)) / (24 * 60 * 60 * 1000);
  cy.log('dateDiff: ' + dateDiff);

  if (dateDiff <= 30) {
    warrantyTxt = 'IW';
  } else if (dateDiff > 30 && dateDiff < 2556) {
    warrantyTxt = 'OOW';
  }

  return warrantyTxt;
};

export const getTimestamp = (): string => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const year = now.getFullYear().toString().slice(-2);
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());
  return `${year}${month}${day}${hour}${minute}${second}`;
};
