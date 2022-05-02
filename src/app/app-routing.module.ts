import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { AppMainComponent } from './layout/app-main/app.main.component';
import { LoginComponent } from './layout/components/login/login.component';
import { ErrorComponent } from './layout/components/error/error.component';
import { NotfoundComponent } from './layout/components/notfound/notfound.component';
import { AccessComponent } from './layout/components/access/access.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppMainComponent,
          children: [{ path: '', component: DashboardComponent }],
        },
        { path: 'pages/login', component: LoginComponent },
        { path: 'pages/error', component: ErrorComponent },
        { path: 'pages/notfound', component: NotfoundComponent },
        { path: 'pages/access', component: AccessComponent },
        { path: '**', redirectTo: 'pages/notfound' },
      ],
      { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
