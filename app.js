(function() {

        return {
            events: {
                'app.activated': 'loadIDs'
            },

            requests: {
                getExtID: function(endPoint, itemID) {
                    return {
                        url: '/api/v2/' + endPoint + '/' + itemID + '.json',
                        type: 'GET'
                    };
                }
            },

            loadIDs: function() {
                var ticket = this.ticket();
                var ticketID = ticket.id();
                var orgID = ticket.organization().id();

                if (orgID) {
                    this.ajax('getExtID', 'organizations', orgID).done(function(data) {
                            console.log(data.organization.external_id;
                            });
                    }

                    this.ajax('getExtID', 'tickets', ticketID).done(function(data) {
                        console.log(data.ticket.external_id);
                    });

                    var requesterEID = ticket.requester().externalId();



                    /*
		var promiseOrg = this.ajax('getExtID', 'tickets', ticketID)            

		this.when(promiseTicket).then(
            function(ticketData) {
            	console.log(ticketData.ticket.brand_id);
            }.bind(this),
            function() {
              console.log('Failure');
            }.bind(this));     
        */
                }
            };

        }());