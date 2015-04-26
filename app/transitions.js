// app/transitions.js

export default function(){
  this.transition(
    this.fromRoute('artists'),
    this.toRoute('artist'),
    this.use('explode', {
      matchBy: 'data-photo-id',
      use: ['fly-to', {duration: '1000'}]
    }),
    this.reverse('explode', {
      matchBy: 'data-photo-id',
      use: ['fly-to', {duration: '2000', easing: 'spring'}]
    })
  );
}
