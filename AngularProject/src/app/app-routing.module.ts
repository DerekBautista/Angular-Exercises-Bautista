import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookResolver } from './resolvers/book.resolver';
import { BlogResolver } from './resolvers/blog.resolver';
import { ProfilerComponent } from './modules/user/components/profiler.component';
import { RegisterComponent } from './modules/user/components/register/register.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'register',
  pathMatch: 'full',
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'book',
  resolve:{
    books:BookResolver
  },
  loadChildren: () =>
    import('./modules/book/book.module').then((m) => m.BookModule),
},
{
  path:'blog',
  resolve:{
    blogs:BlogResolver
  },
  loadChildren: () =>
    import('./modules/blog/blog.module').then((m) => m.BlogModule),
},
{
  path:'profile',
  loadChildren:()=>
    import('./modules/user/user.module').then((m) => m.UserModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
