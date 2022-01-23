function handleProductChange(product, isIncrease){
      const productInput = document.getElementById(product + '-input');
      const productCount = parseInt(productInput.value);
      let productNewCount = productCount;
      if(isIncrease == true){
            productNewCount = productCount + 1;
      }
      if(isIncrease == false && productCount > 0){
            productNewCount = productCount - 1;
      }
      productInput.value = productNewCount;
      let productTotal = 0;
      if(product == "phone"){
            productTotal = productNewCount * 1219;
      }
      if(product == "case"){
            productTotal = productNewCount * 59;
      }
      document.getElementById(product + '-total').innerText = productTotal;

      calculateTotal();
}

function calculateTotal(){
      const phoneInput = document.getElementById('phone-input');
      const phoneCount = parseInt(phoneInput.value);

      const caseInput = document.getElementById('case-input');
      const caseCount = parseInt(caseInput.value);

      const totalPrice = phoneCount * 1219 + caseCount * 59;
      document.getElementById('total-price').innerText = totalPrice;

      const taxInput = totalPrice / 10;
      const tax = parseInt(taxInput);
      document.getElementById('tax-amount').innerText = tax;

      const grandTotal = parseInt(totalPrice + tax);
      document.getElementById('grand-total').innerText = grandTotal;

}