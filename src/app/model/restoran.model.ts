export class restoran{
  id: number;
  naziv: string;
  cenaStola: number;
  lokacija: string;
  drzava: string;
  otvoreno: number;
  vlasnistvo: number
  constructor(id: number, naziv: string, cenaStola: number, lokacija: string, drzava: string, otvoreno: number, vlasnistvo: number){
      this.id = id;
      this.naziv = naziv;
      this.cenaStola = cenaStola;
      this.lokacija = lokacija;
      this.drzava = drzava;
      this.otvoreno = otvoreno;
      this.vlasnistvo = vlasnistvo;
  }
}
