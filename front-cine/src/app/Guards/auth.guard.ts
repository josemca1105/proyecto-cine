import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const authService = inject(AuthService);
  // const router = inject(Router);
  // if (authService.isAuth()) {
  //   return true;
  // } else {
  //   const url = router.createUrlTree(['/login'])
  //   return url;
  // }

  const token = localStorage.getItem('token')
  const router = inject(Router);

  let usuarioVerificado;

  if (token) {
    usuarioVerificado = JSON.parse(token);
  }

  if (usuarioVerificado?.password) {
    return true;
  } else {
    const url = router.createUrlTree(['/login'])
    return url;
  }
};
