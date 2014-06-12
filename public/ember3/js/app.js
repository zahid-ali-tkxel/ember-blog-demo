window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Router.map(function () {
    this.resource("about");
});

