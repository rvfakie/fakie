export const dateShort = function(date: Date) {
  const { selectedLocaleObject } = useI18nTyped();

  return new Intl.DateTimeFormat(selectedLocaleObject.value?.language, {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};

export const dateMedium = function(date: Date) {
  const { selectedLocaleObject } = useI18nTyped();

  return new Intl.DateTimeFormat(selectedLocaleObject.value?.language, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};

export const monthMedium = function(date: Date) {
  const { selectedLocaleObject } = useI18nTyped();

  return new Intl.DateTimeFormat(selectedLocaleObject.value?.language, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};

export const dateWithFormat = function(date: Date, template: string) {
  const [month, day, year] = new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
    .format(date)
    .split('/');

  return template
    .replace('dd', day)
    .replace('mm', month)
    .replace('yyyy', year);
};
