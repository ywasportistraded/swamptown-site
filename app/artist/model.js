import DS from 'ember-data';

var Artist = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    photo: DS.attr('string'),
    imagePath: DS.attr('string'),
    facebookPath: DS.attr('string'),
    youtubePath: DS.attr('string'),
    twitterPath: DS.attr('string'),
    instagramPath: DS.attr('string'),
    status: DS.attr('string')
  });


  Artist.reopenClass({
    FIXTURES: [
      {
        id: 1,
        name: 'Fever Down River',
        description: 'This is Ray Avalos',
        photo: 'This is the photo. Replace with path to photo file later',
        imagePath: '/assets/images/FeverDownRiverCover.jpg',
        facebookPath: 'feverdownriver',
        youtubePath: 'swamptownrecords',
        instagramPath: null,
        twitterPath: 'tiltedbucket',
        status: 'Writing'
      },
      {
        id: 2,
        name: 'The Absent Light',
        description: 'He is dying',
        photo: 'Thats insensitive',
        imagePath: '/assets/images/TheAbsentLightCover.jpeg',
        facebookPath: 'theabsentlight',
        youtubePath: 'theabsentlight',
        instagramPath: 'theabsentlight',
        twitterPath: 'theabsentlight',
        status: 'Recording'
      }
    ]
  });


export default Artist;
