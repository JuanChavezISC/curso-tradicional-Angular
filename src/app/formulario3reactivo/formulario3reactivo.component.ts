import { Component } from '@angular/core';
// Cuando trabajas con fomularios reactivos, debes importar esta clase
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario3reactivo',
  templateUrl: './formulario3reactivo.component.html',
  styleUrl: './formulario3reactivo.component.css'
})
export class Formulario3reactivoComponent {

  constructor(private fb: FormBuilder){
    
  }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  /* formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  }); */

  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  });


  procesar(){
    console.log(this.formUser.value);
  }
/*   name = new FormControl ('', Validators.required);
  email = new FormControl ('', [Validators.required, Validators.email]); */
  
}
