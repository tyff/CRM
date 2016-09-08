



//查询
$(function(){ 
	InitLostTable('.action');
	
	
   $('#lost_list_table').bind('click', function(){  
		var params={};
    	if($("#lost_cname").val()!=null&&$("#lost_cname").val()!='undefined'){
			params['t.']=$("#lost_cname").val();
		}
    	if($("#lost_cusM").val()!=null&&$("#lost_cusM").val()!='undefined'){
			params['t.']=$("#lost_cusM").val();
		}
		//条件查询
    	InitLostTable('.action',params);
 });  
   


    
});  


function InitLostTable(url,para){
	$.ajax({
		type:'POST',
		url:url,
		data:para,
		dataType:'JSON',
		success:function(data){
			if(data.code==1){
				var html="<tr><th height='28'>编号</th><th height='28'>年份</th><th height='28'>客户</th><th height='28'>客户经理</th><th height='28'>流失原因</th></tr>";
				for (var i = 0; i < data.rows.length; i++) {
					var obj = data.rows[i];
					//html+="<tr><td class='list_data_number'>"++"</td><td class='list_data_text'>"++"</td><td class='list_data_number'>"++"</td></tr>"++"</td><td class='list_data_number'>"++"</td></tr>"++"</td><td class='list_data_number'>"++"</td></tr>";
				}
				$("#lost_list_table").html('');
				$("#lost_list_table").html(html);
			}
		
		}
	
	});
}









	


