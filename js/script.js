var sayMyName = function(name)
{
	alert('My name is '+name);
}

var doCoolStuff = function () {
	// body...
var newClassName = document.getElementById('cool').className;

if(newClassName == 'cool'){
	document.getElementById('cool').className = 'cool red';
}else
{
	document.getElementById('cool').className = 'cool';
}
}

var car = {
			make: 'VM',
			color: 'blue',
			type: 'Polo',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['Seat1','Seat2','Seat3','Seat 4'],
			turnOn: function ()
			{
				this.isTurnedOn = true;
			},
			fly: function()
			{
				alert('fly');
			},

			switchCar: function(isOn)
			{
				console.log('turn car '+isOn);
				if (isOn == true) {
					this.isTurnedOn = true;

				}
				else
					this.isTurnedOn = false;
			}

		};
		console.log('Hello');