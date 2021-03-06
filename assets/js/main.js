$('#generator').submit(function(e) {
	e.preventDefault();
});

$('#generate').click(function() {
	let account_type = document.getElementById('type').value;

	if (account_type === 'Minecraft') {
		Pace.restart();
		$.ajax({
			type: 'GET',
			dataType: 'text',
			url: 'api/generate.php?type=Minecraft',
			success: function(data) {
				Swal.fire({
					type: 'success',
					title: 'Here is your account',
					text: data
				});
			}
		});
	} 
	else if (account_type === 'NordVPN') {
		Pace.restart();
		$.ajax({
			type: 'GET',
			dataType: 'text',
			url: 'api/generate.php?type=NordVPN',
			success: function(data) {
				Swal.fire({
					type: 'success',
					title: 'Here is your account',
					text: data
				});
			}
		});
	}

	else if (account_type === 'HTTP_Proxy') {
		Pace.restart();
		$.ajax({
			type: 'GET',
			dataType: 'text',
			url: 'api/generate.php?type=HTTP_Proxy',
			success: function(data) {
				Swal.fire({
					type: 'success',
					title: 'Here is your proxy',
					text: data
				});
			}
		});
	}
	
	else {
		Pace.restart();
		Swal.fire({
			type: 'error',
			title: 'Error',
			text: 'Invalid account type selected.'
		});
	}
})

$('#adduser').click(function() {
	let user = document.getElementById('usr').value;
	let pass = document.getElementById('pwd').value;

	Pace.restart();
	$.ajax({
		type: 'GET',
		dataType: 'text',
		url: 'api/newuser.php?name=' + user + '&pass=' + pass,
		success: function() {
			Swal.fire({
				type: 'success',
				title: "",
				text: 'Successfully added user ' + user + '!',
			});
		}
	});
}

);;
