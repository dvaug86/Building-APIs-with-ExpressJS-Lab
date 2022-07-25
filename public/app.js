
$('#submitButton').click(e => {
	e.preventDefault();
	const handle = $('#handle').val();
	const myContent = $('#myContent').val();

	$.ajax({
		type: 'POST',
		url: '/api/chirps',
		data: { handle, myContent }
	}).then(response => {
		console.log(response);
		displayChirps();
	});

	$('#title').val('');
	$('#myContent').val('');
});

displayChirps();

function displayChirps() {
	$.ajax({
		type: 'GET',
		url: '/api/chirps'
	}).then(chirpSent => {
		$('#container').empty();

		for (const id in chirpSent) {
			if (id === 'nextid') return;

			const deleteBtn = $('<button>Delete Item</button>').click(() => {
				$.ajax({
					type: 'DELETE',
					url: `/api/chirps/${id}`
				}).then(response => {
					console.log(response);
					displayChirps();
				});
			});
/*
			const editButton = $('<button>Edit Item</button>').click(() => {
			
                    - launch the modal
                    - modal will have 2 inputs in it filled in with our current values
                    - modal will have close and save changes buttons
                    const title = $('#edit-title').val();
	                const myContent = $('#edit-content').val();
                    $.ajax({
                        type: 'PUT',
                        url: `/api/todos/${id}`
                        data: { title, content }
                    })
                    .then(response => {
                        console.log(response);
                        displayChirps();
                        - close modal
                    })
                
			});
*/
			$(`
            <div>
                <div><b style='text-decoration: underline;'>${id}: @${chirpSent[id].handle}</b></div>
                <p>${chirpSent[id].myContent}</p>
            </div>
        `)
				.appendTo('#container')
				.append(deleteBtn);
		}
	});
}