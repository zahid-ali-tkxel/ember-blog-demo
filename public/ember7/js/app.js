window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function () {
    this.resource("posts", function () {
        this.resource("post", {path: ':post_id'});
    });
    this.resource("about");
});

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


App.Post.FIXTURES = [
{
     id: 1,
     title: 'Learn Ember.js 1',
     author: 'Zahid Ali',
     intro: 'First tutorial of ember',
     extended: 'Reload your web browser to ensure that all files have been referenced correctly and no errors occur.',
     publishedAt: new Date('07-10-2014')
},
{
     id: 2,
     title: 'Learn Ember.js 2',
     author: 'Zahid Ali',
     intro: 'First tutorial of ember',
     extended: 'Typically this will be a web service API, but in this case we are using an adapter designed to load fixture data:',
     publishedAt: new Date('07-10-2014')
}
];