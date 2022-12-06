import { Restoran } from "src/app/interfaces/restoran";;
import { User } from "src/app/interfaces/user";

export class Order {
    id: string;
    restoran: Restoran;
    total: number;
    user: User;
    constructor(restoran: Restoran, user: User){
        this.restoran = restoran;

        this.user = user;
    }
}
