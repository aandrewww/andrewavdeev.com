const localeData = [
  ...require('react-intl/locale-data/en'),
  ...require('react-intl/locale-data/ru'),
]

module.exports = {
  localeData,
  languages: [
    { value: 'en', text: 'English' },
    { value: 'ru', text: 'Русский' },
  ],
}
