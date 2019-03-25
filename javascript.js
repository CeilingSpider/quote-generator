const quotes = [
  'Be yourself; everyone else is already taken. - Oscar Wilde', 'So many books, so little time. - Frank Zappa',
  'It is never too late to be what you might have been. - George Eliot',
  'We don\'t see things as they are, we see them as we are. - Anais Nin',
  'Dogs are not our whole life, but they make our lives whole. – Roger Caras',
  'Those who dream by day are cognizant of many things which escape those who dream only by night. - Edgar Allan Poe',
  'Hope is nature\'s veil for hiding truth\'s nakedness. - Alfred Bernhard Nobel',
  'Those who dare to fail miserably can achieve greatly. - John F. Kennedy',
  'If you want to be happy, be. - Leo Tolstoy',
  'There is nothing permanent except change. - Heraclitus',
  'Wow. - Owen Wilson'
];

function newQuote () {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
