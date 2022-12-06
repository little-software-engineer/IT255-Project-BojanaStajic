import { Restoran } from "./restoran";
import { User } from "./user";

export interface Owned {
    owned_id: number;
    user: User;
    restoran: Restoran;
}
