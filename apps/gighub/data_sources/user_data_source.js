// ==========================================================================
// Project:   Gighub.UserDataSource
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Gighub */

/** @class
  @extends SC.DataSource
*/
Gighub.UserDataSource = SC.DataSource.extend(
/** @scope Gighub.UserDataSource.prototype */ {

    // Query support
    fetch: function(store, query) {
        // Only support two types of user queries
        // 1. is this name already in use?
        //    -> only want a boolean response
        // 2. is this name and password combo correct?
        //    -> want the user object as a response (without password)
        if (query.get('query_type') == 1) {
            SC.Request.getUrl('/users').header({'Accept': 'application/json'}).json()
                .notify(this, 'didFetchUser', store, query)
                .send();
            return YES;
        }
        else if (query.get('query_type') == 2) {
            SC.Request.getUrl('/users').header({'Accept': 'application/json'}).json()
                .notify(this, 'didFetchUser', store, query)
                .send();
            return YES;
        }
        return NO;
    },

    didFetchUser: function(response, store, query) {
        if (SC.ok(response)) {
            store.loadRecords(Gighub.User, response.get('body').content);
            store.dataSourceDidFetchQuery(query);
        }
        else {
            store.dataSourceDidErrorQuery(query, response);
        }
    },

    // Record support
    retrieveRecord: function(store, storeKey) {
      
      // TODO: Add handlers to retrieve an individual record's contents
      // call store.dataSourceDidComplete(storeKey) when done.
      
      return NO ; // return YES if you handled the storeKey
    },
    
    createRecord: function(store, storeKey) {
      
      SC.Request.postUrl('/users').header({'Accept': 'application/json'}).json()
          .notify(this, 'didCreateUser', store, storeKey)
          .send(store.readDataHash(storeKey));
      
      return YES;
    },

    didCreateUser: function(response, store, storeKey) {
      if (SC.ok(response)) {
        var parser = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var url = parser.exec(response.header('Location'))[8];
        store.dataSourceDidComplete(storeKey, null, url);
      }
      else {
        store.dataSourceDidError(storeKey,response);
      }
    },
    
    updateRecord: function(store, storeKey) {
      
      // TODO: Add handlers to submit modified record to the data source
      // call store.dataSourceDidComplete(storeKey) when done.

      return NO ; // return YES if you handled the storeKey
    },
    
    destroyRecord: function(store, storeKey) {
      
      // TODO: Add handlers to destroy records on the data source.
      // call store.dataSourceDidDestroy(storeKey) when done
      
      return NO ; // return YES if you handled the storeKey
    }
  
}) ;
