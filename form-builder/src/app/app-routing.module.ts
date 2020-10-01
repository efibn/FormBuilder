import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '', component: AppComponent },
  // { path: 'angular',
  //   loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
  // },
  // { path: 'javascript',
  //   loadChildren: () => import('./javascript/javascript.module').then(m => m.JavascriptModule)
  // },

  // { path: '', component: MainComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
