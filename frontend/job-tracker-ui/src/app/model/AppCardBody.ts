export class AppCardBody {
    cardTitle: string;
    count: number;
    cardSubText: string;
    cardIcon: string;

    constructor(cardTitle: string, count: number, cardSubText: string, cardIcon: string){
        this.cardTitle = cardTitle;
        this.count = count;
        this.cardSubText = cardSubText;
        this.cardIcon = cardIcon;
    }
}