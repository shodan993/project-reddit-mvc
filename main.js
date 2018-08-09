$('.add-post').on('click', function () {
  var user = $('#post-user').val();
  var text = $('#post-name').val();

  var postModel = Model({ text: text, name: user });

  var template = Handlebars.compile($('#post-template').html());

  var postView = View(postModel, template);

  postModel.change(function () {
    postView.render();
  });

  $('.posts').append(postView.render());
});
