var title = 'HUMBLE.';
var artiste = 'Kendrick Lamar';

/* 
  "Humble" became Lamar's second number-one single on the US Billboard Hot 100 
  after "Bad Blood" and his first as a lead artist. The song received four nominations 
  at the 60th Annual Grammy Awards: Record of the Year, Best Rap Performance, 
  Best Rap Song, and Best Music Video, winning the latter three.

  Source: [https://en.wikipedia.org/wiki/Humble_(song)]
*/

var writtenBy = ['Kendrick Lamar', 'Mike Will Made It'];
var producedBy = 'Mike Will Made It';
// Mike Will Made It, co-wrote and produced the song!

var musicLabels = ['Top Dawg', 'Aftermath', 'Interscope'];
var releaseFormats = {
  'Digital download': true,
  'Rhythmic contemporary radio': true,
  'Contemporary hit radio': true,
  'Vinyl disc': false,
  'Compact disc': false,
};
var releaseRegionsAndDates = {
  // Dates in ISO standard
  worldwide: ['2017-03-30', '2017-09-22'],
  usa: ['2017-04-04', '2017-05-16'],
};

// This is solely based on information from the Wikipedia page noted above
var someCertifiedUnitsSold = {
  Australia: {
    authority: 'ARIA',
    certification: '5 times Platinum',
    units: 350000,
  },
  UnitedStates: {
    authority: 'RIAA',
    certification: '8 times Platinum',
    units: 8000000,
  },
};

console.log('Title: ' + title);
console.log('Artiste: ' + artiste);
console.log('Written by: ' + writtenBy);
console.log('Produced by: ' + producedBy);
console.log('Music labels: ' + musicLabels);
console.log(releaseFormats);
console.log(releaseRegionsAndDates);
console.log(someCertifiedUnitsSold);
