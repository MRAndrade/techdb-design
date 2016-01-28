Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//



Router.route('/attachment-card', function () {
    this.render('attachmentCardPage');
},{
    name: 'attachment-card'
});

Router.route('/brief-card', function () {
    this.render('briefCardPage');
},{
    name: 'brief-card'
});

Router.route('/dashboard-stat', function () {
    this.render('dashboardStatPage');
},{
	name: 'dashboard-stat'
});

Router.route('/default-minor-components', function () {
    this.render('defaultMinorComponentsPage');
},{
    name: 'default-minor-components'
});

Router.route('/main-dashboard', function () {
    this.render('mainDashboard');
},{
    name: 'main-dashboard'
});

Router.route('/modals', function () {
    this.render('modals');
}, {
    name: 'modals'
});

Router.route('/org-card', function () {
    this.render('orgCardPage');
},{
    name: 'org-card'
});

Router.route('/recent-updates', function () {
    this.render('recentUpdatesPage');
},{
	name: 'recent-updates'
});

Router.route('/search-container', function () {
    this.render('searchContainerPage');
},{
    name: 'search-container'
});

Router.route('/simple-list-item', function () {
    this.render('simpleListItemPage');
},{
    name: 'simple-list-item'
});

Router.route('/user-card', function () {
    this.render('userCardPage');
},{
    name: 'user-card'
});

Router.route('/user-dashboard', function () {
    this.render('userDashboardPage');
},{
    name: 'user-dashboard'
});

Router.route('/user-entry', function () {
    this.render('userEntry');
},{
    name: 'user-entry'
});

Router.route('/projects-working', function () {
    this.render('projectsWorkingPage');
}, {
    name: 'projects-working'
});
