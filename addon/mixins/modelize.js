import Ember from 'ember';

/**
 * @module mixins
 * @class  modelize
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Modelize an object by replacing keys with their corresponsding model, as found via the container
     *
     * @function modelize
     * @param    {Ember.Object} response  Plain Javascript object
     * @returns  {Ember.Object}
     */
    modelize: function ( response ) {
        var mapArrayToClass = function ( item ) {
            return classProperty.create( item );
        };

        for ( var property in response ) {
            // Don't modelize special array properties
            if ( '__each' === property ||
                '[]' === property ||
                '@each' === property ||
                'firstObject' === property ||
                'lastObject' === property ) {
                continue;
            }

            if ( response.hasOwnProperty( property ) ) {
                if ( 'object' === typeof response[ property ] ) {
                    var normalizedKey = this.container._registry.normalize( 'model:'+property );
                    var classProperty = this.container.lookupFactory( normalizedKey );

                    if ( 'function' === typeof classProperty ) {
                        if ( Ember.isArray( response[ property ] ) ) {
                            response[ property ] = Ember.A( response[ property ].map( mapArrayToClass ) );
                        } else {
                            response[ property ] = classProperty.create( response[ property ] );
                        }
                    } else if ( response[ property ] && !Ember.isArray( response[ property ] ) && !(response[ property ] instanceof Ember.Object) ) {
                        response[ property ] = Ember.Object.create( response[ property ] );
                    }

                    this.modelize.call( this, response[ property ] );
                }
            }
        }

        return response;
    }
});
