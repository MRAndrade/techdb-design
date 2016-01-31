Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//



Router.route('/attachment-about-box', function () {
    this.render('attachmentAboutBoxPage');
},{
    name: 'attachment-about-box'
});

Router.route('/attachment-dashboard', function () {
    this.render('attachmentDashboard');
},{
    name: 'attachment-dashboard'
});

Router.route('/attachment-thumbnail', function () {
    this.render('attachmentThumbnailPage');
},{
    name: 'attachment-thumbnail'
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

Router.route('/elastic-search', function () {
    this.render('elasticSearchPage');
},{
    name: 'elastic-search'
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

Router.route('/org-about-box', function () {
    this.render('orgAboutBoxPage');
},{
    name: 'org-about-box'
});

Router.route('/org-dashboard', function () {
    this.render('orgDashboard');
},{
    name: 'org-dashboard'
});

Router.route('/recent-updates', function () {
    this.render('recentUpdatesPage');
},{
	name: 'recent-updates'
});

Router.route('/search-attachments-container', function () {
    this.render('searchAttachmentsContainer');
},{
    name: 'search-attachments-container'
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

Router.route('/user-about-box', function () {
    this.render('userAboutBoxPage');
},{
    name: 'user-about-box'
});

Router.route('/user-dashboard', function () {
    this.render('userDashboard');
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
