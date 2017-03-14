var hello = new Vue({
	el : '#hello',
	data : {
		msg : "Hello Vue",
		people : [
			{name : "Maria"},
			{name : "Pedro"},
			{name : "Gustavo"},
			{name : "Thiago"},
			{name : "Eva"},
			{name : "Ana"}
		],
		newElement : '',
		elements : []
	},
	methods : {
		addElement : function(){
			var title = this.newElement.trim();

			if(title) {
				this.elements.push({title:title});
				this.newElement = "";
			}
		},
		removeElement : function(index) {
			e.preventDefault();
			this.elements.splice(index, 1);
		}
	}
});