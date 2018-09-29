var quotes = [
  [ 'Every artist was first an amateur. - Ralph Waldo Emerson', 'img/1-art-RWEmerson.jpg', 'img/1-artist-RWEmerson.jpg' ],
  [ 'Creativity takes courage. - Henri Matisse', 'img/2-art-HMatisse.jpg', 'img/2-artist-HMatisse.jpg' ],
  [ 'Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso', 'img/3-art-PPicasso.jpg', 'img/3-artist-PPicasso.jpg' ],
  [ 'You don\'t take a photograph, you make it. - Ansel Adams', 'img/4-art-AAdams.jpg', 'img/4-artist-AAdams.jpg' ],
  [ 'Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton', 'img/5-art-TMerton.jpg', 'img/5-artist-TMerton.jpg' ],
  [ 'We don\'t make mistakes, just happy little accidents. - Bob Ross', 'img/6-art-BRoss.jpg', 'img/6-artist-BRoss.jpg' ],
  [ 'A picture is a poem without words. - Horace', 'img/7-art-Horace.jpg', 'img/7-artist-Horace.jpg' ],
  [ 'The principles of true art is not to portray, but to evoke. - Jerzy Kosinski', 'img/8-art-JKosinski.jpg', 'img/8-artist-JKosinski.jpg' ],
  [ 'Painting is easy when you don\'t know how, but very difficult when you do. - Edgar Degas', 'img/9-art-EDegas.jpg', 'img/9-artist-EDegas.jpg' ],
  [ 'As my artist\'s statement explains, my work is utterly incomprehensible and is therefore full of deep significance. - Calvin, of Calvin and Hobbes', 'img/10-art-CH.jpg', 'img/10-artist-CH.jpg' ],
  [ 'The job of the artist is always to deepen the mystery. - Francis Bacon', 'img/11-art-FBacon.jpg', 'img/10-artist-FBacon.jpg' ],
  [ 'The object of art is not to reproduce reality, but to create a reality of the same intensity. - Alberto Giacometti', 'img/12-art-AGiacometti.jpg', 'img/12-artist-AGiacometti.jpg' ],
  [ 'Art must be an expression of love or it is nothing. - Marc Chagall', 'img/13-art-MChagall.jpg', 'img/13-artist-MChagall.jpg' ],
  [ 'True art is the Irreducible Beloved\u2014to be "Won" at Infinite and Perfect Cost of "self". - Adi Da Samraj', 'img/14-art-AdiDa.jpg', 'img/14-artist-AdiDa.jpg' ]
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber][0];
}

//  $(function() {
//   $('.home').click(function() {
//     $(this).css('background-image', 'url(img/tabs3.png)');
//   });
// }):
