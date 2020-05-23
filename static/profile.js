
function submitProfile(evt) {
    evt.preventDefault();

    $.post("/profile",
        $('#profile-form').serialize(),
        function (result) {
            $('#profile').append("<p>" + "Name: " + result.fullname + "</p>");
        }
    );
}

$("#profile-form").on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    fullname: $('#name-field').val(),
    age: $('#age-field').val(),
    occupation: $('#occupation-field').val()
  };

  $.post('/api/profile', formData, (response) => {
    $('#profiles').append(`
      <li>${response.fullname} the ${response.occupation} is ${response.age}</li>
    `);
  });
});
