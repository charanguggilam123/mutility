import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { EncoderComponent } from './encoder/encoder.component';
import { JlintComponent } from './jlint/jlint.component';
import { JwtDecoderComponent } from './jwt-decoder/jwt-decoder.component';
import { PaginateComponent } from './paginate/paginate.component';

const routes: Routes = [
  {path:'',redirectTo:"/json-lint",pathMatch:'full'},
  {path:"json-lint",component:JlintComponent},
  {path:"b64-encode",component: EncoderComponent},
  {path:"jwt-decode",component: JwtDecoderComponent},
  {path:"paginate-data",component: PaginateComponent},
  {path:'contact-us',component:ContactReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
