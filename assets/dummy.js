eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"dummy/Ember CLI QUnit/tests/ember-cli-qunit/mixins/modelize.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cli-qunit/mixins\');\n    test(\'ember-cli-qunit/mixins/modelize.js should pass jshint\', function() { \n      ok(true, \'ember-cli-qunit/mixins/modelize.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/Ember CLI QUnit/tests/ember-cli-qunit/mixins/modelize.jshint.js");

;eval("define(\"dummy/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=dummy/app.js");

;eval("define(\"dummy/controllers/demo\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Controller.extend({\n    });\n  });//# sourceURL=dummy/controllers/demo.js");

;eval("define(\"dummy/ember-cli-esnext/tests/ember-cli-esnext/mixins/modelize.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cli-esnext/mixins\');\n    test(\'ember-cli-esnext/mixins/modelize.js should pass jshint\', function() { \n      ok(true, \'ember-cli-esnext/mixins/modelize.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/ember-cli-esnext/tests/ember-cli-esnext/mixins/modelize.jshint.js");

;eval("define(\"dummy/ember-data/tests/ember-data/mixins/modelize.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-data/mixins\');\n    test(\'ember-data/mixins/modelize.js should pass jshint\', function() { \n      ok(true, \'ember-data/mixins/modelize.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/ember-data/tests/ember-data/mixins/modelize.jshint.js");

;eval("define(\"dummy/ember-export-application-global/tests/ember-export-application-global/mixins/modelize.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-export-application-global/mixins\');\n    test(\'ember-export-application-global/mixins/modelize.js should pass jshint\', function() { \n      ok(true, \'ember-export-application-global/mixins/modelize.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/ember-export-application-global/tests/ember-export-application-global/mixins/modelize.jshint.js");

;eval("define(\"dummy/initializers/export-application-global\", \n  [\"ember\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=dummy/initializers/export-application-global.js");

;eval("define(\"dummy/live-reload-middleware/tests/live-reload-middleware/mixins/modelize.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - live-reload-middleware/mixins\');\n    test(\'live-reload-middleware/mixins/modelize.js should pass jshint\', function() { \n      ok(true, \'live-reload-middleware/mixins/modelize.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/live-reload-middleware/tests/live-reload-middleware/mixins/modelize.jshint.js");

;eval("define(\"dummy/models/bar\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Object.extend();\n  });//# sourceURL=dummy/models/bar.js");

;eval("define(\"dummy/models/car\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Object.extend();\n  });//# sourceURL=dummy/models/car.js");

;eval("define(\"dummy/models/foo\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Object.extend();\n  });//# sourceURL=dummy/models/foo.js");

;eval("define(\"dummy/router\", \n  [\"ember\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n        this.route( \'index\', { path: \'/\' });\n        this.route( \'demo\' );\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=dummy/router.js");

;eval("define(\"dummy/routes/demo\", \n  [\"ember\",\"sl-ember-modelize/mixins/modelize\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var SlModelize = __dependency2__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend(SlModelize, {\n\n        fixture: {\n            foo: {\n                bar: {\n                    car: [\n                        {\n                            name: \'car1\',\n                            color: \'blue\'\n                        },\n                        {\n                            name: \'car2\',\n                            color: \'red\'\n                        },\n                        {\n                            name: \'car3\',\n                            color: \'black\'\n                        }\n                    ],\n                    test: \'this is a bar model\'\n                },\n                text: \'this is a foo model\'\n            }\n        },\n\n        model: function() {\n            this.controllerFor( \'demo\' ).set( \'fixture\', this.fixture );\n            return this.modelize( this.fixture );\n        }\n    });\n  });//# sourceURL=dummy/routes/demo.js");

;eval("define(\"dummy/sl-ember-modelize/tests/sl-ember-modelize/mixins/modelize.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - sl-ember-modelize/mixins\');\n    test(\'sl-ember-modelize/mixins/modelize.js should pass jshint\', function() { \n      ok(true, \'sl-ember-modelize/mixins/modelize.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/sl-ember-modelize/tests/sl-ember-modelize/mixins/modelize.jshint.js");

;eval("define(\"dummy/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"<i class=\\\"fa fa-home\\\"></i> Home\");\n      }\n\n      data.buffer.push(\"<br>\\n<div class=\\\"container\\\">\\n\\n    <div class=\\\"row\\\">\\n        <div class=\\\"col-md-12\\\">\\n            <div class=\\\"btn-group pull-right\\\">\\n                <button type=\\\"button\\\" class=\\\"btn btn-default dropdown-toggle\\\" data-toggle=\\\"dropdown\\\" aria-expanded=\\\"false\\\">\\n                    <i class=\\\"fa fa-reorder\\\"></i> <span class=\\\"caret\\\"></span>\\n                </button>\\n\\n                <ul class=\\\"dropdown-menu\\\" role=\\\"menu\\\">\\n                <li>\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"index\", options) : helperMissing.call(depth0, \"link-to\", \"index\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</li>\\n                <li><a href=\\\"https://github.com/softlayer/sl-ember-modelize/blob/master/README.md\\\"><i class=\\\"fa fa-wrench\\\"></i> Get Started</a></li>\\n                <li><a href=\\\"https://github.com/softlayer/sl-ember-modelize/blob/master/CONTRIBUTING.md\\\"><i class=\\\"fa fa-cog\\\"></i> Contribution Guide</a></li>\\n                <li><a href=\\\"https://github.com/softlayer/sl-ember-modelize/stargazers\\\"><i class=\\\"fa fa-star\\\"></i> Star Our Repo</a></li>\\n                <li><a href=\\\"https://github.com/softlayer/sl-ember-modelize/fork\\\"><i class=\\\"fa fa-code-fork\\\"></i> Fork Our Repo</a></li>\\n                </ul>\\n            </div>\\n        </div>\\n    </div>\\n\\n    \");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\\n    <br><br>\\n    <div class=\\\"row\\\">\\n        <div class=\\\"col-md-12 text-center\\\">\\n            <p>npm install sl-ember-modelize</p>\\n            <p><a href=\\\"https://github.com/softlayer/sl-ember-modelize/blob/master/LICENSE.md\\\">MIT Licensed</a></p>\\n        </div>\\n    </div>\\n</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dummy/templates/application.js");

;eval("define(\"dummy/templates/demo\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<div class=\\\"row\\\">\\n    <div class=\\\"col-md-12 text-center\\\">\\n        <h1>Usage Demonstration</h1>\\n        <p class=\\\"lead\\\">View the source code of the dummy application for syntax employed in this demo</p>\\n    </div>\\n</div>\\n\\n<div class=\\\"row\\\">\\n    <div class=\\\"col-md-12\\\">\\n        <p>The purpose of this Mixin is to take a Plain Old Javascript Object (POJO) and turn it into a series of  nested model objects.  This works for objects stored on keys and on arrays of objects stored on keys too.</p>\\n\\n        <p>Consider this fixture:</p>\\n\\n        <pre>\\nfixture: {\\n    foo: {\\n        bar: {\\n            car: [\\n                {\\n                    name: \'car1\',\\n                    color: \'blue\'\\n                },\\n                {\\n                    name: \'car2\',\\n                    color: \'red\'\\n                },\\n                {\\n                    name: \'car3\',\\n                    color: \'black\'\\n                }\\n            ],\\n            test: \'this is a bar model\'\\n        },\\n        text: \'this is a foo model\'\\n    }\\n}\\n</pre>\\n\\n        <p>Passing this POJO through the <code>modelize</code> function will cause the object stored in the values for <code>foo</code>, <code>bar</code>, and the array stored on <code>car</code>, to be replaced with the models defined for those key names in the app.  <code>Modelize</code> looks up models via Ember\'s container, if a model is found then it is instantiated with the values from the fixture. <p>\\n\\n        <p>You can verify this by typing the following commands into your browser\'s console:</p>\\n\\n        <pre>\\nFoo = Dummy.__container__.lookupFactory(\'model:foo\')\\nDummy.__container__.lookup(\'controller:application\').get(\'model.foo\') instanceof Foo\\n\\nBar = Dummy.__container__.lookupFactory(\'model:bar\')\\nDummy.__container__.lookup(\'controller:application\').get(\'model.foo.bar\') instanceof Bar\\n\\nCar = Dummy.__container__.lookupFactory(\'model:car\')\\nDummy.__container__.lookup(\'controller:application\').get(\'model.foo.bar.car.firstObject\')\\n</pre>\\n\\n        <p>Or better yet, take a look at the tests!\\n    </div>\\n</div>\");\n      \n    });\n  });//# sourceURL=dummy/templates/demo.js");

;eval("define(\"dummy/templates/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"<i class=\\\"fa fa-cubes fa-5x\\\"></i>\");\n      }\n\n      data.buffer.push(\"<div class=\\\"row\\\">\\n    <div class=\\\"col-md-12 text-center\\\">\\n        <h1>sl-ember-modelize</h1>\\n        <p class=\\\"lead\\\">An Ember CLI Addon that provides the ability to turn a Plain Old Javascript Object (POJO) into a series of nested model objects.</p>\\n    </div>\\n</div>\\n\\n<div class=\\\"row\\\">\\n    <div class=\\\"col-md-4 text-center\\\">\\n        <h3>\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"demo\", options) : helperMissing.call(depth0, \"link-to\", \"demo\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h3>\\n        <p><a href=\\\"dist\\\"><b>Demo</b></a></p>\\n    </div>\\n    <div class=\\\"col-md-4 text-center\\\">\\n        <h3><a href=\\\"https://github.com/softlayer/sl-ember-modelize/blob/master/README.md\\\"><i class=\\\"fa fa-book fa-5x\\\"></i></a></h3>\\n        <p><a href=\\\"https://github.com/softlayer/sl-ember-modelize/blob/master/README.md\\\"><b>Documentation</b></a></p>\\n    </div>\\n    <div class=\\\"col-md-4 text-center\\\">\\n        <h3><a href=\\\"https://github.com/softlayer/sl-ember-modelize\\\"><i class=\\\"fa fa-github fa-5x\\\"></i></a></h3>\\n        <p><a href=\\\"https://github.com/softlayer/sl-ember-modelize\\\"><b>Available on GitHub</b></a></p>\\n    </div>\\n</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dummy/templates/index.js");

;eval("define(\"dummy/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/app.jshint.js");

;eval("define(\"dummy/tests/controllers/demo.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/demo.js should pass jshint\', function() { \n      ok(true, \'controllers/demo.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/controllers/demo.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests/helpers\');\n    test(\'dummy/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/helpers/resolver.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests/helpers\');\n    test(\'dummy/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/helpers/start-app.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests\');\n    test(\'dummy/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/test-helper.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/unit/mixins/modelize-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests/unit/mixins\');\n    test(\'dummy/tests/unit/mixins/modelize-test.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/unit/mixins/modelize-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/unit/mixins/modelize-test.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/unit/routes/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests/unit/routes\');\n    test(\'dummy/tests/unit/routes/application-test.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/unit/routes/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/unit/routes/application-test.jshint.js");

;eval("define(\"dummy/tests/helpers/resolver\", \n  [\"ember/resolver\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=dummy/tests/helpers/resolver.js");

;eval("define(\"dummy/tests/helpers/start-app\", \n  [\"ember\",\"dummy/app\",\"dummy/router\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=dummy/tests/helpers/start-app.js");

;eval("define(\"dummy/tests/models/bar.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/bar.js should pass jshint\', function() { \n      ok(true, \'models/bar.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/models/bar.jshint.js");

;eval("define(\"dummy/tests/models/car.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/car.js should pass jshint\', function() { \n      ok(true, \'models/car.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/models/car.jshint.js");

;eval("define(\"dummy/tests/models/foo.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - models\');\n    test(\'models/foo.js should pass jshint\', function() { \n      ok(true, \'models/foo.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/models/foo.jshint.js");

;eval("define(\"dummy/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/router.jshint.js");

;eval("define(\"dummy/tests/routes/demo.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/demo.js should pass jshint\', function() { \n      ok(true, \'routes/demo.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/routes/demo.jshint.js");

;eval("define(\"dummy/tests/test-helper\", \n  [\"dummy/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=dummy/tests/test-helper.js");

;eval("define(\"dummy/tests/unit/mixins/modelize-test\", \n  [\"ember\",\"sl-ember-modelize/mixins/modelize\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var SlModelize = __dependency2__[\"default\"];\n\n    var subject;\n\n    module( \'Unit - mixins:modelize\', {\n        setup: function() {\n            subject = Ember.Object.createWithMixins( SlModelize );\n        }\n    });\n\n    test( \'it mixes in\', function() {\n       ok( SlModelize.detect( subject ), \'Modelize function gets mixed in\' );\n    });\n  });//# sourceURL=dummy/tests/unit/mixins/modelize-test.js");

;eval("define(\"dummy/tests/unit/routes/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:application\', \'ApplicationRoute\', {\n      // Specify the other units that are required for this test.\n      needs: [\'model:foo\',\'model:bar\',\'model:car\']\n    });\n\n    test(\'Modelizes Foo\', function() {\n      var appRoute = this.subject(),\n          Foo = appRoute.container.lookupFactory( \'model:foo\' ),\n          Bar = appRoute.container.lookupFactory( \'model:bar\' ),\n          Car = appRoute.container.lookupFactory( \'model:car\' ),\n          modelized = appRoute.modelize( appRoute.fixture );\n\n      ok( modelized.foo instanceof Foo, \'modelized.foo is instance of Foo model\' ); \n    });\n    test(\'Modelizes Bar\', function() {\n      var appRoute = this.subject(),\n          Foo = appRoute.container.lookupFactory( \'model:foo\' ),\n          Bar = appRoute.container.lookupFactory( \'model:bar\' ),\n          Car = appRoute.container.lookupFactory( \'model:car\' ),\n          modelized = appRoute.modelize( appRoute.fixture );\n\n      ok( modelized.foo.get(\'bar\') instanceof Bar, \'modelized.foo.bar is instance of Bar model\' ); \n    });\n    test(\'Modelizes Car\', function() {\n      var appRoute = this.subject(),\n          Foo = appRoute.container.lookupFactory( \'model:foo\' ),\n          Bar = appRoute.container.lookupFactory( \'model:bar\' ),\n          Car = appRoute.container.lookupFactory( \'model:car\' ),\n          modelized = appRoute.modelize( appRoute.fixture );\n\n      ok( modelized.foo.get( \'bar.car.firstObject\' ) instanceof Car, \'modelized.foo.bar.car[0] is instance of Car model\' ); \n    });\n  });//# sourceURL=dummy/tests/unit/routes/application-test.js");

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */




});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}




/* jshint ignore:end */
