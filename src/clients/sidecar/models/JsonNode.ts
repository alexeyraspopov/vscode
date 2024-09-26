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
import type { JsonNodeType } from "./JsonNodeType";
import {
  JsonNodeTypeFromJSON,
  JsonNodeTypeFromJSONTyped,
  JsonNodeTypeToJSON,
} from "./JsonNodeType";

/**
 *
 * @export
 * @interface JsonNode
 */
export interface JsonNode {
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  empty?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  valueNode?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  containerNode?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  missingNode?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  array?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  object?: boolean;
  /**
   *
   * @type {JsonNodeType}
   * @memberof JsonNode
   */
  nodeType?: JsonNodeType;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  pojo?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  number?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  integralNumber?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  floatingPointNumber?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _short?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _int?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _long?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _float?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _double?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  bigDecimal?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  bigInteger?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  textual?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _boolean?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  _null?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof JsonNode
   */
  binary?: boolean;
}

/**
 * Check if a given object implements the JsonNode interface.
 */
export function instanceOfJsonNode(value: object): value is JsonNode {
  return true;
}

export function JsonNodeFromJSON(json: any): JsonNode {
  return JsonNodeFromJSONTyped(json, false);
}

export function JsonNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JsonNode {
  if (json == null) {
    return json;
  }
  return {
    empty: json["empty"] == null ? undefined : json["empty"],
    valueNode: json["valueNode"] == null ? undefined : json["valueNode"],
    containerNode: json["containerNode"] == null ? undefined : json["containerNode"],
    missingNode: json["missingNode"] == null ? undefined : json["missingNode"],
    array: json["array"] == null ? undefined : json["array"],
    object: json["object"] == null ? undefined : json["object"],
    nodeType: json["nodeType"] == null ? undefined : JsonNodeTypeFromJSON(json["nodeType"]),
    pojo: json["pojo"] == null ? undefined : json["pojo"],
    number: json["number"] == null ? undefined : json["number"],
    integralNumber: json["integralNumber"] == null ? undefined : json["integralNumber"],
    floatingPointNumber:
      json["floatingPointNumber"] == null ? undefined : json["floatingPointNumber"],
    _short: json["short"] == null ? undefined : json["short"],
    _int: json["int"] == null ? undefined : json["int"],
    _long: json["long"] == null ? undefined : json["long"],
    _float: json["float"] == null ? undefined : json["float"],
    _double: json["double"] == null ? undefined : json["double"],
    bigDecimal: json["bigDecimal"] == null ? undefined : json["bigDecimal"],
    bigInteger: json["bigInteger"] == null ? undefined : json["bigInteger"],
    textual: json["textual"] == null ? undefined : json["textual"],
    _boolean: json["boolean"] == null ? undefined : json["boolean"],
    _null: json["null"] == null ? undefined : json["null"],
    binary: json["binary"] == null ? undefined : json["binary"],
  };
}

export function JsonNodeToJSON(value?: JsonNode | null): any {
  if (value == null) {
    return value;
  }
  return {
    empty: value["empty"],
    valueNode: value["valueNode"],
    containerNode: value["containerNode"],
    missingNode: value["missingNode"],
    array: value["array"],
    object: value["object"],
    nodeType: JsonNodeTypeToJSON(value["nodeType"]),
    pojo: value["pojo"],
    number: value["number"],
    integralNumber: value["integralNumber"],
    floatingPointNumber: value["floatingPointNumber"],
    short: value["_short"],
    int: value["_int"],
    long: value["_long"],
    float: value["_float"],
    double: value["_double"],
    bigDecimal: value["bigDecimal"],
    bigInteger: value["bigInteger"],
    textual: value["textual"],
    boolean: value["_boolean"],
    null: value["_null"],
    binary: value["binary"],
  };
}
