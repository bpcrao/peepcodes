/**
 * Created with IntelliJ IDEA.
 * User: purnaboyapati
 * Date: 18/6/13
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */

App.Router.map(function () {
    this.resource('tabs', { path: '/' },function(){
        this.resource('tab', {path: ':tab_id'})
    });
    this.resource('foods', {path:"foods"});

});


App.TabsRoute = Ember.Route.extend(

    {
        model:function () {
            return App.Table.find()
        }
        ,

        setupController: function(controller, model) {
            this.controllerFor('foods').set('model', App.Food.find());
        }
    }

)


App.TabRoute = Ember.Route.extend(
    {
        model:function () {
            return App.Table.find()
        }
    }
)

App.FoodsRoute = Ember.Route.extend(
    {
        model:function () {
            return App.Food.find()
        }

    }
)
