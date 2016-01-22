Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/dashboard-stat', function () {
    this.render('page-dashboardStat');
},{
	name: 'dashboard-stat'
});