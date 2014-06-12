window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
//App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.ApplicationAdapter = DS.RESTAdapter.extend({
    url: 'http://localhost:3000/posts'
});

App.Router.map(function () {
    this.resource("posts", function () {
        this.resource("post", {path: ':path_id'});
    });
    this.resource("about");
});

// tell which model is associated with posts route
App.PostsRoute = Ember.Route.extend({
    model: function () {
        console.log(this.get('store').find('post'));
        return this.get('store').find('post');
    }
});

App.Post = DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    intro: DS.attr('string'),
    extended: DS.attr('string'),
    publishedAt: DS.attr('date')
});

App.PostController = Ember.ObjectController.extend({
    isEditing: false,
    actions: {
        edit: function () {
            this.set('isEditing', true);
        },
        doneEditing: function () {
            this.set('isEditing', false);
            this.get('model').save();
        }    
    }
});
