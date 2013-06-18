/**
 * Created with IntelliJ IDEA.
 * User: purnaboyapati
 * Date: 18/6/13
 * Time: 4:49 PM
 * To change this template use File | Settings | File Templates.
 */
Ember.Handlebars.registerBoundHelper('centsToDollar', function(value) {
    return (value % 100 === 0 ?
        value / 100 + '.00' :
        parseInt(value / 100, 10) + '.' + value % 100);
});