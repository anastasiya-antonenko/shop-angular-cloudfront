import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (err) => {
          const { status } = err as HttpErrorResponse;
          const url = new URL(request.url);

          if (status === 403) {
            this.notificationService.showError(
              `User is not authorized to access this resource with an explicit deny`,
              0
            );
          } else if (status === 401) {
            this.notificationService.showError(
              `Unauthorized`,
              0
            );
          } else {
            this.notificationService.showError(
              `Request to "${url.pathname}" failed. Check the console for the details`,
              0
            );
          }
        },
      })
    );
  }
}
