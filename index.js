/* jshint node: true */
'use strict';

module.exports = {
  name: 'mdb-input-checkbox',
    included: function(app) {
        this._super.included(app);

        app.import('vendor/jquery.js');
        app.import('vendor/findMe.js');
    }
};
