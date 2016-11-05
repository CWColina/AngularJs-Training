(function(){
    var app = angular.module('store',[]);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [ 
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            canPurchase: true,
            soldOut: true,
            images:[
                {
                    full: 
                }
            ]
        },
            {
            name: 'Amethyst',
            price: 2,
            description: '. . .',
            canPurchase: false,
            soldOut: true
        }
    ];
})();