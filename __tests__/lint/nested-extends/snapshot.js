// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint nested-extends 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:13:17 at #/paths/~1ping~1{id}~1{test}/get/parameters/0/name

Path parameter \`test_id\` is not used in the path \`/ping/{id}/{test}\`.

11 | parameters:
12 |   - in: path
13 |     name: test_id
   |           ^^^^^^^
14 |     description: User id
15 |     required: true

Error was generated by the path-parameters-defined rule.


[2] openapi.yaml:11:7 at #/paths/~1ping~1{id}~1{test}/get/parameters

The operation does not define the path parameter \`{id}\` expected by path \`/ping/{id}/{test}\`.

 9 | summary: example summary
10 | operationId: getPingTestById
11 | parameters:
   | ^^^^^^^^^^
12 |   - in: path
13 |     name: test_id

Error was generated by the path-parameters-defined rule.


[3] openapi.yaml:11:7 at #/paths/~1ping~1{id}~1{test}/get/parameters

The operation does not define the path parameter \`{test}\` expected by path \`/ping/{id}/{test}\`.

 9 | summary: example summary
10 | operationId: getPingTestById
11 | parameters:
   | ^^^^^^^^^^
12 |   - in: path
13 |     name: test_id

Error was generated by the path-parameters-defined rule.


[4] openapi.yaml:2:1 at #/info/contact

Info object should contain \`contact\` field.

1 | openapi: 3.1.0
2 | info:
  | ^^^^
3 |   title: Example OpenAPI 3 definition.
4 |   version: 1.0.0

Warning was generated by the info-contact rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 3 errors and 1 warning.
run \`redocly lint --generate-ignore-file\` to add all problems to the ignore file.


`;
