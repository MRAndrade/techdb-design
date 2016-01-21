Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//


//o primeiro paremtro é o nome da rota na url
// o this.render vc passa o template que vc quer renderizar

Router.route('/nome-do-componente', function () {
    this.render('nomeDoComponente');
});


Router.route('/componente-2', function () {	//nome da rota na URL
    this.render('componenteDois');   //nome do TEMPLATE
},{
	name: 'componente-2'				//um nome simbolico que vc dá pra essa rota pra referenciar ela depois
});

//outro

//outro, etc

Router.route('/componente-3', function() {
	this.render('componenteTres');
},{
	name: 'componente-3'
})

Router.route('/componente-4', function() {
	this.render('componenteQuatro');
},{
	name: 'componente-4'
})

Router.route('/componente-5', function() {
	this.render('componenteCinco');
},{
	name: 'componente-5'
})

Router.route('/componente-6', function() {
	this.render('componenteSeis');
},{
	name: 'componente-6'
})