export class AppCardBody {
    cardTitle: string;
    count: number;
    cardSubText: string;

    constructor(cardTitle: string, count: number, cardSubText: string){
        this.cardTitle = cardTitle;
        this.count = count;
        this.cardSubText = cardSubText;
    }
}