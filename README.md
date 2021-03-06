# codius-web

![](https://github.com/codius/codius-web/workflows/Docker%20CI/badge.svg)

Web-monetized Codius service deployment and loading pages.

### Run

```
npm install
npm run build
PAYMENT_POINTER=$codius.example.com npm start
```

### Environment Variables

#### CODIUS_HOST_URI
* Type: String
* Description: Root URI the Codius host

#### PAYMENT_POINTER
* Type: String
* Description: Codius host's [payment pointer](https://paymentpointers.org/).

#### RECEIPT_VERIFIER_URI
* Type: String
* Description: Root URI of the [receipt verifier](https://github.com/coilhq/receipt-verifier)'s `balances` API.

#### REQUEST_PRICE
* Type: Number
* Description: The amount required to have been paid to serve a request. Denominated in the host's asset (code and scale).

### Routes

#### `/`
Codius host's service deployment page.

This page is web-monetized. Deployment instructions are displayed when payment is verified (by successfully crediting receipt(s) to the web monetization request id balance at the [receipt verifier](https://github.com/coilhq/receipt-verifier)).

The balance is expected to be debited by the Codius host's [authentication token webhook](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#webhook-token-authentication) ([implementation](https://github.com/wilsonianb/codius-token-auth-webhook)) when the CREATE request is made to the Kubernetes API server.

#### `/{ID}/402`
Codius service balance reload page.

This page is web-monetized. The total paid amount and a link to the Codius service are displayed when payment is verified (by successfully crediting receipt(s) to the Codius service's balance at the [receipt verifier](https://github.com/coilhq/receipt-verifier)).
