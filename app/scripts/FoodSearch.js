function viewInnerList(section){
	var divObj = document.getElementById(section);
	if (divObj.className == "sectionContainer") {
		divObj.className="sectionContainerHide";
	}
	else{
	divObj.className = "sectionContainer";
	}
}	
function checkInnerList(name, length){
	var inputElement;

	var state = document.getElementsByName(name + "1")[0].checked;

	for (i = 2; i <= length; i++) {
		inputElement = document.getElementsByName(name + i)[0];
		if (state) {
			inputElement.checked = true;
		}
		else{
			inputElement.checked = false;
		}
	}
}
function next(){ 
	var pNum=1; 
	var maxPage=100;
	pNum++; 
	if (pNum > maxPage) pNum=1; 
	document.getElementById("slides").src="page"+pNum+".htm"; 
} 
 