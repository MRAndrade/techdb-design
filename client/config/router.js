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

Router.route('/user-card', function () {
    this.render('userCardPage');
},{
	name: 'user-card'
});

Router.route('/recent-updates', function () {
    this.render('recentUpdatesPage');
},{
	name: 'recent-updates'
});