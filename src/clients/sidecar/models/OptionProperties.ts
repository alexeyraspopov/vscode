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

import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface OptionProperties
 */
export interface OptionProperties {
  /**
   *
   * @type {string}
   * @memberof OptionProperties
   */
  display_name: string;
  /**
   *
   * @type {string}
   * @memberof OptionProperties
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof OptionProperties
   */
  hint?: string;
  /**
   *
   * @type {string}
   * @memberof OptionProperties
   */
  format?: string;
  /**
   *
   * @type {string}
   * @memberof OptionProperties
   */
  pattern?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof OptionProperties
   */
  _enum?: Array<string>;
  /**
   *
   * @type {any}
   * @memberof OptionProperties
   */
  default_value?: any | null;
}

/**
 * Check if a given object implements the OptionProperties interface.
 */
export function instanceOfOptionProperties(value: object): value is OptionProperties {
  if (!("display_name" in value) || value["display_name"] === undefined) return false;
  if (!("description" in value) || value["description"] === undefined) return false;
  return true;
}

export function OptionPropertiesFromJSON(json: any): OptionProperties {
  return OptionPropertiesFromJSONTyped(json, false);
}

export function OptionPropertiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OptionProperties {
  if (json == null) {
    return json;
  }
  return {
    display_name: json["display_name"],
    description: json["description"],
    hint: json["hint"] == null ? undefined : json["hint"],
    format: json["format"] == null ? undefined : json["format"],
    pattern: json["pattern"] == null ? undefined : json["pattern"],
    _enum: json["enum"] == null ? undefined : json["enum"],
    default_value: json["default_value"] == null ? undefined : json["default_value"],
  };
}

export function OptionPropertiesToJSON(value?: OptionProperties | null): any {
  if (value == null) {
    return value;
  }
  return {
    display_name: value["display_name"],
    description: value["description"],
    hint: value["hint"],
    format: value["format"],
    pattern: value["pattern"],
    enum: value["_enum"],
    default_value: value["default_value"],
  };
}
