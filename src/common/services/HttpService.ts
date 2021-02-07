import { Observable, of } from 'rxjs';
import { ajax, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Either, left, right } from 'fp-ts/es6/Either';

import { HttpError, createHttpError } from 'common/errors';

import { Params, HTTPRequestMethod, AjaxResponseType } from '../models';

type HttpResponse = Observable<Either<HttpError, AjaxResponse>>;

type HttpGetRequest = {
  url: string;
  responseType?: AjaxResponseType;
  params?: Params;
};

export class HttpService {
  constructor(private readonly baseUrl: string) {}

  public get({ url, responseType, params = {} }: HttpGetRequest): HttpResponse {
    const urlWithParams = `${url}?${HttpService.objectToQueryString(params)}`;

    return this.makeRequest({
      url: urlWithParams,
      method: HTTPRequestMethod.GET,
      responseType,
    });
  }

  private makeRequest({
    url,
    method,
    body,
    responseType = AjaxResponseType.JSON,
  }: {
    url: string;
    method: HTTPRequestMethod;
    body?: unknown;
    responseType?: AjaxResponseType;
  }): HttpResponse {
    return ajax({
      url: `${this.baseUrl}${url}`,
      method,
      responseType,
      body,
    }).pipe(
      map(right),
      catchError((error: AjaxError) => of(left(createHttpError(error.status, error)))),
    );
  }

  private static objectToQueryString(obj: Params): string {
    return Object.keys(obj)
      .map(key => `${key}=${obj[key]}`)
      .join('&');
  }
}
