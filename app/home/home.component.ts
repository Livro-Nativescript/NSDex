import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["~/../../custom.css"]
})
export class HomeComponent implements OnInit {
    items: Array<any> = [];

    constructor(private http: HttpClient, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.http.get("https://pokeapi.co/api/v2/pokemon/?limit=1000").subscribe((res:any) =>
        {
            for (let i = 0; i < res.results.length; i++) {
                const element = <any> res.results[i];
                const id = i+1;
                element.picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                element.id = id;
                this.items.push(element);
            }
        },(error) => console.log(`Error loading pkmn: ${error}`));
    }
}
