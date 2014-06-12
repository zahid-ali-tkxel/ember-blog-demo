window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

//we need to tell where to look for records, just to get started we will be using fixture adapter
// it allows us to specify all of our models in javascript.
// this is the first step to define data store when dealing with data-+
App.ApplicationAdapter = DS.FixtureAdapter.extend();
//App.Store = DS.Store.extend({
//    revision: 12,
//    adapter: 'DS.FixtureAdapter'
//});


App.Router.map(function () {
    // to display post model data we need to define a post resource
    this.resource("posts");
    this.resource("about");
});
// by following conventions ember knows that there must be a PostsRoute when there is a posts resource
App.PostsRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('post');
    }
});

// define the model including all the fields it will have,
App.Post = DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    intro: DS.attr('string'),
    extended: DS.attr('string'),
    publishedAt: DS.attr('date')
});

// model is no good without any data we here we have defined the data for Post model
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