var listProduct = new Vue ({
    el : '.list-product',
    data :{
        product_title : 'Kính Gucci',
        url : 'https://shopee.vn/',
        src_img : 'gucci.jpg',
        price : '700000',
        color : 'Đen',
        check:false

    },
   methods : {
       formatPrice(){
            var number = this.price;
           return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
       }
   }
});
