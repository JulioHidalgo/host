import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'widget',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',  
        remoteName: 'mfwidget',                               
        exposedModule: './WidgetModule'
      })
      .then(m => m.WidgetModule)
      .catch(err => console.error('Error cargando remote', err))
  },
];
