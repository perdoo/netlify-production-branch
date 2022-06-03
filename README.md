# Netlify Production Branch

Update a site's production branch on Netlify.

## Inputs

### `netlifyToken`

_Required._ Netlify personal API token.

### `siteId`

_Required._ Netlify site ID.

### `branch`

_Required._ New production branch.

## Example usage

```yaml
uses: perdoo/netlify-production-branch@main
with:
  netlifyToken: ${{ secrets.NETLIFY_AUTH_TOKEN }}
  siteId: foo
  branch: mybranch
```
