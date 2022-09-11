import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path:'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: '/welcome', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
