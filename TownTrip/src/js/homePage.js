$(function() {
	$('#slidesbigRoomByRiver').slidesjs({
        width: 50,
        height: 30,
        play: {
          active: true,
          auto: true,
          interval: 2000,
          swap: true
        }
      });
	  
	$('.room_name').click(function(){
		$(".room_name").removeClass("btn-selected");
		$(this).addClass("btn-selected");
		
		var roomName = $(this).data("room");
		$(".slidesRoom").hide();
		$(".slidescontainer" + roomName).show();
		
		$('#slides' + roomName).slidesjs({
			width: 50,
			height: 30,
			play: {
			  active: true,
			  auto: true,
			  interval: 2000,
			  swap: true
			}
		});
	});

	$('#showBookingBtn').click(function(){
		var bookingDivHtml = $("#bookingModal").html();
			layer.ready(function(){ 
			  //官网欢迎页
			  layer.open({
				type: 1,
				title: 'layer弹层组件官网',
				fix: false,
				maxmin: true,
				shadeClose: true,
				area: ['1100px', '600px'],
				content: bookingDivHtml,
				btn: ['提交订单', '残忍离去'],
				yes: function(){
					$.ajax({
							url:'http://182.254.148.171:5000/book_hotel',
							type:'POST', //GET
							async:true,    //或false,是否异步
							data:{
								name:$('#name').val(),
								phone:$('#phone').val(),
								startdate:$('#startdate').val(),
								howlong:$('#howlong').val(),
								price:$('#price').val(),
								room:$('#room').val(),
								notes:$('#notes').val()
							},
							timeout:5000,    //超时时间
							dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
							beforeSend:function(xhr){
								console.log(xhr)
								console.log('发送前')
							},
							success:function(data,textStatus,jqXHR){
								console.log(data)
								console.log(textStatus)
								console.log(jqXHR)
								
								alert("提交订单成功");
							},
							error:function(xhr,textStatus){
								alert("提交订单失败");
								return false;
							},
							complete:function(){}
						});
				},
				//end: function(){ layer.tips('Hi', '#about', {tips: 1}) }
			});
		});
	});
	
	
	$('#bookingHotelBtn').click(function(){
		//mobile
		console.log(123);
	});
	
});