import Ember from 'ember';
import SlModelize from 'sl-ember-modelize/mixins/modelize';
import { module, test } from 'qunit';

var subject;

module( 'Unit - mixins:modelize', {
    beforeEach: function() {
        subject = Ember.Object.extend( SlModelize ).create();
    }
});

test( 'it mixes in', function( assert ) {
    assert.ok( SlModelize.detect( subject ), 'Modelize function gets mixed in' );
});
