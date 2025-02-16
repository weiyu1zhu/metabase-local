# Search

  - [GET /api/search/](#get-apisearch)
  - [GET /api/search/models](#get-apisearchmodels)

## `GET /api/search/`

Search within a bunch of models for the substring `q`.
  For the list of models, check `metabase.search.config/all-models.

  To search in archived portions of models, pass in `archived=true`.
  If you want, while searching tables, only tables of a certain DB id,
  pass in a DB id value to `table_db_id`.

  To specify a list of models, pass in an array to `models`.
  .

### PARAMS:

*  **`q`** value may be nil, or if non-nil, value must be a non-blank string.

*  **`archived`** value may be nil, or if non-nil, value must be a valid boolean string ('true' or 'false').

*  **`table_db_id`** value may be nil, or if non-nil, value must be an integer greater than zero.

*  **`models`** value may be nil, or if non-nil, value must satisfy one of the following requirements: 1) value must be an array. Each value must be a non-blank string. 2) value must be a non-blank string.

## `GET /api/search/models`

Get the set of models that a search query will return.

### PARAMS:

*  **`q`** 

*  **`archived-string`** 

*  **`table-db-id`**

---

[<< Back to API index](../api-documentation.md)