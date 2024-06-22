function paystackPopUp(publicKey, email, amount, ref, onClosed, callback) {
  let handler = PaystackPop.setup({
    key: publicKey,
    email: email,
    amount: amount,
    ref: ref,
    onClose: function () {
      onClosed();
    },
    callback: function (response) {
      callback();
      
    },
  });
  return handler.openIframe();
}