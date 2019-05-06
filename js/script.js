var sayMyName = function(name)
{
	alert('My name is '+name);
}

var doCoolStuff = function (argument) {
	// body...
	document.getElementById('cool').className ='cool red';
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