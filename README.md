# Lantek

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Preguntas
1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test, use this as an opportunity to explain what you would add.
He tardado al rededor de 3 horas en hacer el proyecto entero. En caso de haber tenido más tiempo, me hubiese gustado añadir un login para las credenciales de la API y retocar los estilos y maquetación.

3. What was the most useful feature added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
Para gestionar las llamadas he usado un forkJoin en el que he unido las dos peticiones
    const maquinas2D$: Observable<Maquina[]> =
      this.inicioService.getMaquinas2D();
    const maquinas3D$: Observable<Maquina[]> =
      this.inicioService.getMaquinas3D();

    forkJoin([maquinas2D$, maquinas3D$])
      .pipe(
        map(([maquinas2D, maquinas3D]) => {
          this.maquinas = maquinas2D.concat(maquinas3D);
          this.filteredMaquinas = this.maquinas;
        })
      )
      .subscribe();
5. How would you track down a performance issue in production? Have you ever had to do this?
Si monitorizamos las peticiones y consultas, podremos saber cuando ocurre un error para poder solucionarlo lo antes posible.

6. How would you improve the Lantek API that you just used?
Con las conclusiones de ese monitoreo, podremos ver que datos se consultan repetidas veces para poder cachearlos.
Por otra parte, se podrían usar algún token de seguridad derivado de un inicio de sesión
