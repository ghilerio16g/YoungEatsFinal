$(function(){
var byTime = [], byRestriction = [], byMealtime = [];
		
		$("input[name=time]").on( "change", function() {
			if (this.checked) byTime.push("[data-category~='" + $(this).attr("value") + "']");
			else removeA(byTime, "[data-category~='" + $(this).attr("value") + "']");
		});
		
		$("input[name=restrictions]").on( "change", function() {
			if (this.checked) byRestriction.push("[data-category~='" + $(this).attr("value") + "']");
			else removeA(byRestriction, "[data-category~='" + $(this).attr("value") + "']");
		});
		
		$("input[name=mealtime]").on( "change", function() {
			if (this.checked) byMealtime.push("[data-category~='" + $(this).attr("value") + "']");
			else removeA(byMealtime, "[data-category~='" + $(this).attr("value") + "']");
		});
		
		$("input").on( "change", function() {
			var str = "Include items \n";
			var selector = '', cselector = '', nselector = '';
					
			var $lis = $('.meals > div'),
				$checked = $('input:checked');	
				
			if ($checked.length) {	
			
				if (byTime.length) {		
					if (str == "Include items \n") {
						str += "    " + "with (" +  byTime.join(',') + ")\n";				
						$($('input[name=time]:checked')).each(function(index, byTime){
							if(selector === '') {
								selector += "[data-category~='" + byTime.id + "']";  					
							} else {
								selector += ",[data-category~='" + byTime.id + "']";	
							}				 
						});					
					} else {
						str += "    AND " + "with (" +  byTime.join(' OR ') + ")\n";				
						$($('input[name=restrictions]:checked')).each(function(index, byTime){
							selector += "[data-category~='" + byTime.id + "']";
						});
					}							
				}
				
				if (byRestriction.length) {						
					if (str == "Include items \n") {
						str += "    " + "with (" +  byRestriction.join(' OR ') + ")\n";					
						$($('input[name=restrictions]:checked')).each(function(index, byRestriction){
							if(selector === '') {
								selector += "[data-category~='" + byRestriction.id + "']";  					
							} else {
								selector += ",[data-category~='" + byRestriction.id + "']";	
							}				 
						});					
					} else {
						str += "    AND " + "with (" +  byRestriction.join(' OR ') + ")\n";				
						$($('input[name=restrictions]:checked')).each(function(index, byRestriction){
							if(cselector === '') {
								cselector += "[data-category~='" + byRestriction.id + "']";  					
							} else {
								cselector += ",[data-category~='" + byRestriction.id + "']";	
							}					
						});
					}			
				}
				
				if (byMealtime.length) {			
					if (str == "Include items \n") {
						str += "    " + "with (" +  byMealtime.join(' OR ') + ")\n";				
						$($('input[name=mealtime]:checked')).each(function(index, byMealtime){
							if(selector === '') {
								selector += "[data-category~='" + byMealtime.id + "']";  					
							} else {
								selector += ",[data-category~='" + byMealtime.id + "']";	
							}				 
						});				
					} else {
						str += "    AND " + "with (" +  byMealtime.join(' OR ') + ")\n";				
						$($('input[name=mealtime]:checked')).each(function(index, byMealtime){
							if(nselector === '') {
								nselector += "[data-category~='" + byMealtime.id + "']";  					
							} else {
								nselector += ",[data-category~='" + byMealtime.id + "']";	
							}	
						});
					}			 
				}
				
				$lis.hide(); 
				console.log(selector);
				console.log(cselector);
				console.log(nselector);
				
				if (cselector === '' && nselector === '') {			
					$('.meals > div').filter(selector).show();
				} else if (cselector === '') {
					$('.meals > div').filter(selector).filter(nselector).show();
				} else if (nselector === '') {
					$('.meals > div').filter(selector).filter(cselector).show();
				} else {
					$('.meals > div').filter(selector).filter(cselector).filter(nselector).show();
				}
				
			} else {
				$lis.show();
			}	
								  
			$("#result").html(str);	
	
		});
		
		function removeA(arr) {
			var what, a = arguments, L = a.length, ax;
			while (L > 1 && arr.length) {
				what = a[--L];
				while ((ax= arr.indexOf(what)) !== -1) {
					arr.splice(ax, 1);
				}
			}
			return arr;
		}
});
