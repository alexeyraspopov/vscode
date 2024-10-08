/** Possible / allowed operations on CCloud Kafka topics
 * @see https://docs.confluent.io/platform/current/security/authorization/acls/overview.html#topic-resource-type-operations
 **/

export const KAFKA_TOPIC_OPERATIONS: readonly string[] = [
  "ALTER",
  "CREATE",
  "DELETE",
  "DESCRIBE",
  "READ",
  "WRITE",
  "ALTER_CONFIGS",
  "DESCRIBE_CONFIGS",
];
