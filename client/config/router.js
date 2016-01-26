Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/dashboard-stat', function () {
    this.render('dashboardStatPage');
},{
	name: 'dashboard-stat'
});

Router.route('/main-dashboard', function () {
    this.render('mainDashboard');
},{
    name: 'main-dashboard'
});

Router.route('/recent-updates', function () {
    this.render('recentUpdatesPage');
},{
	name: 'recent-updates'
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
})

Router.route('/panel', function () {
    this.render('panelPage');
}, {
    name: 'panel'
})