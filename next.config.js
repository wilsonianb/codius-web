module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    receiptVerifierUrl: process.env.RECEIPT_VERIFIER_URL,
    paymentPointer: process.env.PAYMENT_POINTER
  }
}
