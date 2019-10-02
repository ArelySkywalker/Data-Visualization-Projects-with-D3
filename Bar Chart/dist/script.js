	const w = 700;
	const h = 500;
	const padding = 60;

	// Create my SVG
	const svg = d3.select("#barChart")
					.append("svg")
					.attr("width", w)
					.attr("height", h);
	
	// Create X-Axis
	svg.append("g")
	.attr("id", "x-axis");
	

	// Create Y-Axis
	svg.append("g")
	.attr("id", "y-axis");