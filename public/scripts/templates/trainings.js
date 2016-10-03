module.exports = [
			'<article>',
			'<header>',
			'<a href=""><%=trainingName%></a>',
			'</header>',
			'<span>Who: <%=name%></span>',
			'<span>When: <%=time%></span>',
			'<span>Where: <%=location%></span>',
			'<span>Seats remaining: <%=seatsNo%></span>',
			'<span>Training Status: <%=status%></span>',
			'<button>Attend this training</button>'
].join('');