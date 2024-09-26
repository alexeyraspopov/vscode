/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type { Preferences } from "../models/index";
import { PreferencesFromJSON, PreferencesToJSON } from "../models/index";

export interface GatewayV1PreferencesPutRequest {
  Preferences?: Preferences;
}

/**
 *
 */
export class PreferencesResourceApi extends runtime.BaseAPI {
  /**
   */
  async gatewayV1PreferencesGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Preferences>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/gateway/v1/preferences`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => PreferencesFromJSON(jsonValue));
  }

  /**
   */
  async gatewayV1PreferencesGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Preferences> {
    const response = await this.gatewayV1PreferencesGetRaw(initOverrides);
    return await response.value();
  }

  /**
   */
  async gatewayV1PreferencesPutRaw(
    requestParameters: GatewayV1PreferencesPutRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Preferences>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/gateway/v1/preferences`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: PreferencesToJSON(requestParameters["Preferences"]),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => PreferencesFromJSON(jsonValue));
  }

  /**
   */
  async gatewayV1PreferencesPut(
    requestParameters: GatewayV1PreferencesPutRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Preferences> {
    const response = await this.gatewayV1PreferencesPutRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
