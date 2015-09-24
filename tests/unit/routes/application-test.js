import {
    moduleFor,
    test
} from 'ember-qunit';

moduleFor( 'route:demo', 'DemoRoute', {
    needs: [ 'model:foo', 'model:bar', 'model:car' ]
});

test( 'Modelizes Foo', function( assert ) {
    const appRoute = this.subject();
    const Foo = appRoute.container.lookupFactory( 'model:foo' );
    const modelized = appRoute.modelize( appRoute.fixture );

    assert.ok( modelized.foo instanceof Foo, 'modelized.foo is instance of Foo model' );
});

test( 'Modelizes Bar', function( assert ) {
    const appRoute = this.subject();
    const Bar = appRoute.container.lookupFactory( 'model:bar' );
    const modelized = appRoute.modelize( appRoute.fixture );

    assert.ok( modelized.foo.get( 'bar' ) instanceof Bar, 'modelized.foo.bar is instance of Bar model' );
});

test( 'Modelizes Car', function( assert ) {
    const appRoute = this.subject();
    const Car = appRoute.container.lookupFactory( 'model:car' );
    const modelized = appRoute.modelize( appRoute.fixture );

    assert.ok( modelized.foo.get( 'bar.car.firstObject' ) instanceof Car, 'modelized.foo.bar.car[0] is instance of Car model' );
});
