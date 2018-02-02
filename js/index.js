window.onload = function (){
	var actionObj = {
		init(){
			console.log(this)
			this.videoConfig();
			this.listBoxConfig();
			this.mediaConfig();
		},
		videoConfig(){
			$.ajax({
	            url: '/xxx',
	            async: true,
	            type: 'GET',
	            dataType: "JSON",
	            contentType: "application/json",
	            data: {},
	            success: function (data) {
	            	$("#videoEntity")[0].src = "./movie.mp4"; // data.??
	                $("#videoEntity").on('loadeddata',() => {
	                	$("#videoEntity")[0].play()
	                })
	                $("#videoText").text("文字说明111") // data.??
	            },
	            error: function (data) {
	                console.log("error")
	                $("#videoEntity")[0].src = "./movie.mp4"; // data.??
	                $("#videoEntity").on('loadeddata',() => {
	                	// $("#videoEntity")[0].play()
	                })
	                $("#videoText").text("文字说明111") // data.??
	            }
	        });
		},
		contentConfig(){
			$.ajax({
	            url: '/xxx',
	            async: true,
	            type: 'GET',
	            dataType: "JSON",
	            contentType: "application/json",
	            data: {},
	            success: function (data) {
	            	
	            },
	            error: function (data) {
	                // $("#conDetail").empty()
	                // let htmlStr = "";
	                // var dataArr = []
	                // for(){

	                // }
	                // $("#conDetail").html(htmlStr)
	            }
	        });
		},
		listBoxConfig(){
			$.ajax({
	            url: '/xxx',
	            async: true,
	            type: 'GET',
	            dataType: "JSON",
	            contentType: "application/json",
	            data: {},
	            success: function (data) {
	            	
	            },
	            error: function (data) {
	                $("#listBox").empty()
	                let htmlStr = "";
	                var dataArr = [
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                ]
	                for(let i = 0; i<dataArr.length; i++){
	                	htmlStr += `<li class="fl list"><a href="${dataArr[i].href}" target="_blank">${dataArr[i].content}</a></li>`;
	                }
	                $("#listBox").html(htmlStr)
	            }
	        });
		},
		mediaConfig(){
			$.ajax({
	            url: '/xxx',
	            async: true,
	            type: 'GET',
	            dataType: "JSON",
	            contentType: "application/json",
	            data: {},
	            success: function (data) {
	            	
	            },
	            error: function (data) {
	                $("#coopListBox").empty()
	                let htmlStr = "";
	                var dataArr = [
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                	{
	                		href:'www.baidu.com',
	                		content: "人民网新年专题"
	                	},
	                ]
	                for(let i = 0; i<dataArr.length; i++){
	                	htmlStr += `<li class="coopList fl"></li>`;
	                }
	                $("#coopListBox").html(htmlStr)
	            }
	        });
		}
	}
	
	actionObj.init();


};