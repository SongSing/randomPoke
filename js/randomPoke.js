var numberOfPokes = 721; // change this if japan builds more pocket monsters
var dex = new Pokedex();

function randomInt(min, max)
{
	if (max === undefined)
	{
		max = min;
		min = 0;
	}

	return parseInt(Math.random() * (max - min) + min);
}

function generate()
{
	var r = randomInt(0, numberOfPokes) + 1;

	var rs = r.toString();

	while (rs.length < 3)
	{
		rs = "0" + rs;
	}

	//var link = "http://media.pldh.net/dreamworld/" + rs + ".png";
	var name = dex.pokeName(r);
	var link = "sprites/" + rs + ".png";

	$("#pokeName").text("#" + rs + " - " + name);
	$("#pokeImg").attr("src", link);
}

$(function()
{
	$("#gen").click(generate);
});