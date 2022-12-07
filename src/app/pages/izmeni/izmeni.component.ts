import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Restoran } from 'src/app/interfaces/restoran';
import { restoran } from 'src/app/model/restoran.model';
import { restoranService } from 'src/app/services/restoran.service';

@Component({
  selector: 'app-izmeni',
  templateUrl: './izmeni.component.html'
})
export class IzmeniComponent implements OnInit {

  restoran: Restoran;
  editForm: FormGroup;
  private subscription: Subscription;
  constructor(private fb: FormBuilder, private restoranService: restoranService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.editForm = this.fb.group({
      naziv: ['', Validators.required],
      cenaStola: ['', Validators.required],
      lokacija: ['', Validators.required],
      drzava: ['', Validators.required],
      otvoreno: ['', Validators.required],
      vlasnistvo: ['', Validators.required],
    })
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.subscription = this.restoranService.getRestoran(id).subscribe(restoran => {
        this.restoran = restoran;
        this.editForm.setValue({
          naziv: this.restoran.naziv,
          cenaStola: this.restoran.cenaStola,
          lokacija: this.restoran.lokacija,
          drzava: this.restoran.drzava,
          otvoreno: this.restoran.otvoreno,
          vlasnistvo: this.restoran.vlasnistvo,
        })
      })
    })

  }

  onSubmit() {
    if (!this.editForm.valid) {
      return;
    }
    const naziv = this.editForm.controls['naziv'].value;
    const cenaStola = this.editForm.controls['cenaStola'].value;
    const lokacija = this.editForm.controls['lokacija'].value;
    const drzava = this.editForm.controls['drzava'].value;
    const otvoreno = this.editForm.controls['otvoreno'].value;
    const vlasnistvo = this.editForm.controls['vlasnistvo'].value;

    let newrestoran = new restoran(this.restoran.id, naziv, cenaStola, lokacija, drzava, otvoreno, vlasnistvo);
    console.log(newrestoran);

    this.restoranService.update(newrestoran).subscribe(() => {
      this.router.navigate(['/restorani', this.restoran.id])
    });
  }
}
