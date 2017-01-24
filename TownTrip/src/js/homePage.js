$(function() {
	var picNumDic = new Dictionary();
	picNumDic.add("bigRoomByRiver", 2);
	picNumDic.add("butyRoomByRiver", 3);
	picNumDic.add("familyRoomByRiver", 3);
	picNumDic.add("grandMasInn", 9);
	picNumDic.add("rockingChairRoomByRiver", 2);
	picNumDic.add("smallRoomByRiver", 2);
	
	var rebuildPicSliderFunc = function(roomName){
		$("#slidesDiv").empty();
		
		var slidesDivInnerHtml = 
            '<div class="slidesContainer">' +
			'<div id="slidesPic">';
		for(var i =0 ; i < picNumDic.getItem(roomName); i++){
			slidesDivInnerHtml +='<img src="src/img/room/' + roomName + '/' + i + '.jpg" class="slideImg">'
		}
		slidesDivInnerHtml += '</div></div>';
		$("#slidesDiv").html(slidesDivInnerHtml);
		$('#slidesPic').slidesjs({
		    width: 50,
		    height: 30,
		    navigation: {
		        active: false,
		        // [boolean] Generates next and previous buttons.
		        // You can set to false and use your own buttons.
		        // User defined buttons must have the following:
		        // previous button: class="slidesjs-previous slidesjs-navigation"
		        // next button: class="slidesjs-next slidesjs-navigation"
		        effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    pagination: {
		        active: true,
		        // [boolean] Create pagination items.
		        // You cannot use your own pagination. Sorry.
		        effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    play: {
		        active: true,
		        // [boolean] Generate the play and stop buttons.
		        // You cannot use your own buttons. Sorry.
		        effect: "slide",
		        // [string] Can be either "slide" or "fade".
		        interval: 3000,
		        // [number] Time spent on each slide in milliseconds.
		        auto: true,
		        // [boolean] Start playing the slideshow on load.
		        swap: true,
		        // [boolean] show/hide stop and play buttons
		        pauseOnHover: true,
		        // [boolean] pause a playing slideshow on hover
		        restartDelay: 1000
		        // [number] restart delay on inactive slideshow
		    },
		    callback: {
		        loaded: function (number) {
		            // Do something awesome!
		            // Passes start slide number
		        },
		        start: function (number) {
		            // Do something awesome!
		            // Passes slide number at start of animation
		        },
		        complete: function (number) {
		            // Do something awesome!
		            // Passes slide number at end of animation
		        }
		    }
		});
	
		
		$('.slidesjs-pagination-item a').click(function(){
			//alert('test');
			$('.slidesjs-play').click();
		}); 
	}
	
	var clickSlidePicFunc = function(event){
		var imgElement = event.target;
		imgElement.style = 'width:900px;height:600px;';
		var imgPath = imgElement.src;
		var imgPathSrcIndex = imgPath.indexOf('src/img/room/');
		var imgPathJpgIndex = imgPath.indexOf('.jpg');
		var imgRoomName = imgPath.substring(imgPathSrcIndex + 13, imgPathJpgIndex -2);
		var divElement = $('<div></div>').html($(imgElement)).html();
		layer.ready(function(){ 
			  //官网欢迎页
			  layer.open({
				type: 1,
				title: false,
				closeBtn:0,
				fix: false,
				maxmin: false,
				shadeClose: true,
				area: ['900px', '600px'],
				content: divElement,
				end: function(){ 
					rebuildPicSliderFunc(imgRoomName);
					$('#slidesPic img').click(clickSlidePicFunc);
				}
			});
		});
	}
	
	var clickNormalPicFunc = function (event) {
	    var imgElement = event.target;
	    var imgElementParent = imgElement.parentNode;
	    imgElement.style = 'width:900px;height:600px;';
	    var imgPath = imgElement.src;
	    var imgPathSrcIndex = imgPath.indexOf('src/img/room/');
	    var imgPathJpgIndex = imgPath.indexOf('.jpg');
	    var imgRoomName = imgPath.substring(imgPathSrcIndex + 13, imgPathJpgIndex - 2);
	    var divElement = $('<div></div>').html($(imgElement)).html();
	    layer.ready(function () {
	        //官网欢迎页
	        layer.open({
	            type: 1,
	            title: false,
	            closeBtn: 0,
	            fix: false,
	            maxmin: false,
	            shadeClose: true,
	            area: ['900px', '600px'],
	            content: divElement,
	            end: function () {
	                imgElement.style = '';
	                imgElementParent.appendChild(imgElement);
	                //rebuildPicSliderFunc(imgRoomName);
	                //$('#slidesPic img').click(clickSlidePicFunc);
	            }
	        });
	    });
	}

	function sleep(n) { //n表示的毫秒数
		var start = new Date().getTime();
		while (true) if (new Date().getTime() - start > n) break;
    }  

	
    $('#slidesPic').slidesjs({
        width: 50,
        height: 30,
		 navigation: {
		 active: false,
			// [boolean] Generates next and previous buttons.
			// You can set to false and use your own buttons.
			// User defined buttons must have the following:
			// previous button: class="slidesjs-previous slidesjs-navigation"
			// next button: class="slidesjs-next slidesjs-navigation"
		  effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
		pagination: {
		  active: true,
			// [boolean] Create pagination items.
			// You cannot use your own pagination. Sorry.
		  effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
        play: {
          active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
		  effect: "slide",
			// [string] Can be either "slide" or "fade".
		  interval: 3000,
			// [number] Time spent on each slide in milliseconds.
		  auto: true,
			// [boolean] Start playing the slideshow on load.
		  swap: true,
			// [boolean] show/hide stop and play buttons
		  pauseOnHover: true,
			// [boolean] pause a playing slideshow on hover
		  restartDelay: 1000
			// [number] restart delay on inactive slideshow
        },
		callback: {
		  loaded: function(number) {
			// Do something awesome!
			// Passes start slide number
		  },
		  start: function(number) {
			// Do something awesome!
			// Passes slide number at start of animation
		  },
		  complete: function(number) {
			// Do something awesome!
			// Passes slide number at end of animation
		  }
		}
      });
	
	$('.slidesjs-pagination-item a').click(function(){
		$('.slidesjs-play').click();
	}); 
	
	$('#slidesPic img').click(clickSlidePicFunc);
	$('.img-prompt-layer').click(clickNormalPicFunc);

	$('.room_name').click(function(){
		$(".room_name").removeClass("btn-selected");
		$(this).addClass("btn-selected");
		
		var roomName = $(this).data("room");
		$("#slidesDiv").empty();
		
		var slidesDivInnerHtml = 
            '<div class="slidesContainer">' +
			'<div id="slidesPic">';
		for(var i =0 ; i < picNumDic.getItem(roomName); i++){
			slidesDivInnerHtml +='<img src="src/img/room/' + roomName + '/' + i + '.jpg" class="slideImg">'
		}
		slidesDivInnerHtml += '</div></div>';
		$("#slidesDiv").html(slidesDivInnerHtml);
		$('#slidesPic').slidesjs({
		    width: 50,
		    height: 30,
		    navigation: {
		        active: false,
		        // [boolean] Generates next and previous buttons.
		        // You can set to false and use your own buttons.
		        // User defined buttons must have the following:
		        // previous button: class="slidesjs-previous slidesjs-navigation"
		        // next button: class="slidesjs-next slidesjs-navigation"
		        effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    pagination: {
		        active: true,
		        // [boolean] Create pagination items.
		        // You cannot use your own pagination. Sorry.
		        effect: "slide"
		        // [string] Can be either "slide" or "fade".
		    },
		    play: {
		        active: true,
		        // [boolean] Generate the play and stop buttons.
		        // You cannot use your own buttons. Sorry.
		        effect: "slide",
		        // [string] Can be either "slide" or "fade".
		        interval: 3000,
		        // [number] Time spent on each slide in milliseconds.
		        auto: true,
		        // [boolean] Start playing the slideshow on load.
		        swap: true,
		        // [boolean] show/hide stop and play buttons
		        pauseOnHover: true,
		        // [boolean] pause a playing slideshow on hover
		        restartDelay: 1000
		        // [number] restart delay on inactive slideshow
		    },
		    callback: {
		        loaded: function (number) {
		            // Do something awesome!
		            // Passes start slide number
		        },
		        start: function (number) {
		            // Do something awesome!
		            // Passes slide number at start of animation
		        },
		        complete: function (number) {
		            // Do something awesome!
		            // Passes slide number at end of animation
		        }
		    }
		});
	
		$('.slidesjs-pagination-item a').click(function(){
			//alert('test');
			$('.slidesjs-play').click();
		}); 
		
		$('#slidesPic img').click(clickSlidePicFunc);
	});

	$('#showBookingBtn').click(function(){
		var bookingDivHtml = $("#bookingModal").html();
			layer.ready(function(){ 
			  //官网欢迎页
			  layer.open({
				type: 1,
				title: '客房预定',
				fix: false,
				maxmin: false,
				shadeClose: true,
				area: ['600px', '500px'],
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