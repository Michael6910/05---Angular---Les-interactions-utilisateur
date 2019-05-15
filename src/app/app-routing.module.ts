import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const ROUTES: Routes = [ 
{ path: 'create-kitten', component: CreateKittenComponent },
{ path: 'list-kitten', component: ListKittenComponent },
{ path: 'user-kitten', component: UserKittenComponent },
{ path: 'app', component: AppComponent },];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { ROUTES };
