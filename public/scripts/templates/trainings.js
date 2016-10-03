module.exports = [
			'<article class="train-article">',
			'<header class="train-article-head">',
			'<a href=""><%=trainingName%></a>',
			'</header>',
			'<span>Who: <%=name%></span>',
			'<span>When: <%=time%></span>',
			'<span>Where: <%=location%></span>',
			'<span>Seats remaining: <%=seatsNo%></span>',
			'<span>Training Status: <%=status%></span>',
			'<button class="attend_train">Attend this training</button>',
			'</article>'
].join('');