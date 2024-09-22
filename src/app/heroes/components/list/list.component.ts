import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: String[] = ['Iroman', 'Hulk', 'Spiderman','Thor','She Hulk','DeapPool','Wolwerine'];
  public deleteHero?: String;
    removeLasHero(): void{
    this.deleteHero = this.heroNames.pop();
    //console.log({deleteHeros});

    }

    resetHero(): void{
      this.heroNames = ['Iroman', 'Hulk', 'Spiderman','Thor','She Hulk','DeapPool','Wolwerine'];
    }
}
