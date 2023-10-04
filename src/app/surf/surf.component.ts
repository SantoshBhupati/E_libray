// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-surf',
//   templateUrl: './surf.component.html',
//   styleUrls: ['./surf.component.css']
// })
// export class SurfComponent {

//   filterText = '';
//   cards = [
//     { title: 'Card One', text: 'Some text.' },
//     { title: 'Card Two', text: 'Some text.' },
//     { title: 'Card Three', text: 'Some text.' },
//     { title: 'Card Four', text: 'Some text.' },
//     { title: 'Card Five', text: 'Some text.' },
//     { title: 'Card Six', text: 'Some text.' },
//     { title: 'Card Seven', text: 'Some text.' },
//     { title: 'Card Eight', text: 'Some text.' }
//   ];

//   get filteredCards() {
//     return this.cards.filter(card =>
//       card.title.toLowerCase().includes(this.filterText.toLowerCase())
//     );
//   }
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-surf',
  templateUrl: './surf.component.html',
  styleUrls: ['./surf.component.css']
})
export class SurfComponent {
  filterText = '';
  categoryFilter='';
  authorFilter='';
  cards = [
    // { title: 'Card One', text: 'Some text.',image:'/assets/img1.jpg' },
    { title: 'Harry Potter & the half blood prince', image:'/assets/img1.jpg',text:'Author: J. K Rowling  Category: Novel',link:'Subscribe now'
  },
    { title: 'Love Story', image:'/assets/img2.jpg',text: 'Author: karen kingsbury  Category: Romance' ,link:'Subscribe now' },
    { title: 'The Skittering and other tales',image:'/assets/img3.jpg', text: 'Author: Tony Tucker  Category: Horror',link:'Subscribe now' },
    { title: 'Treasure Island',image:'/assets/img4.jpg', text: 'Author: Robert Stevenson Category: Adventure' ,link:'Subscribe now'},
    { title: 'Harry Potter & the prisoners of Azkaban',image:'/assets/Picture1.jpg',text:'Author: J. K Rowling  Category: Novel',link:'Subscribe now' },
    { title: 'Harry Potter & the deathly hallows part 1', image:'/assets/Picture1.jpg',text:'Author: J. K Rowling  Category: Novel',link:'Subscribe now' },
    // { title: 'Card seven', text: 'Some text.' },
    // { title: 'Card eight', text: 'Some text.' }
    // Add more card objects here
  ];

  get filteredCards() {
    return this.cards.filter(card =>
      card.title.toLowerCase().includes(this.filterText.toLowerCase())&&
      card.text.toLowerCase().includes(this.authorFilter.toLowerCase())&&
      card.text.toLowerCase().includes(this.categoryFilter.toLowerCase())
    );
  }
}
