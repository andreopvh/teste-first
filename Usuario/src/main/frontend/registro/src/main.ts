import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { RegistroModule } from './app/registro.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RegistroModule);
