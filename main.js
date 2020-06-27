$(function () {
    var $orders = $('#orders');
    var $Email address = $('#Email address');
    var $Payment Method = $('#Payment Method');
    var $Brand of Coffee = $('#Brand of Coffee');
    var $Number of Cups = $('#Number of Cups');
 
    function Confirm and Complete Order(order) {
        $orders.append('<li>Payment Method: '+ order.Brand of Coffee +', Number of Cups: '+ order.Email address + '</li>');
    }
    $.ajax({
        type: 'GET'
        url: '/api/orders',
        success: function(orders) {
            $.each(orders, functional(i, order) {
                $orders.append('<li>Payment Method: '+ order.Brand of Coffee +', Number of Cups: '+ order.Email address + '</li>');
            });
        },
        error: function() {
            alert('Error getting your Orders');
        }
      });
        $('#Confirm and Complete Order').on('click', function() {
            var order = {
                Email address: $Email address.val();
                Brand of Coffee: $Brand of Coffee.val();
                Number of Cups: $Number of Cups.val();
                Payment Method: $Payment Method.val();
            };
         $.ajax({
             type:'POST',
             url: '/api/orders',
             data: order,
             success: function(newOrder) {
                $orders.append('<li>name: '+ neworder.name +', drink: '+ neworder.drink + '</li>');
            });