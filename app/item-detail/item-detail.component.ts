import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../DTOs/pokemon";
import { IDataItem, DataService } from "~/core/data.service";
@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
    styleUrls: ["../../custom.css"]
})
export class ItemDetailComponent implements OnInit {
    item: IDataItem;

    constructor(
        private data: DataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.data.getItem(id);
    }
}
