(function($) {
	
	//Private internal function to access api (this is not available outside of our closure)
	function lighthouseService(beacon, url, callback) {
		var url = "http://" + beacon.settings.account + ".lighthouseapp.com/" + url + "?callback=?";
		
		if(beacon.settings.token)
			url += "&_token=" + beacon.settings.token;
		
		$.getJSON(url, function(data) {
			callback.apply(this, $.makeArray(data));
		})
	};
	
	//The Plugin itself
	jQuery.jBeacon = {
		
		//Function to set up account specific settings
		settings : function(options) {
			this.settings = jQuery.extend({
			     token: null
			  }, options);
		},
		
		//==========================================================
		//  Projects
		//==========================================================
		
		listProjects : function(f) {
			lighthouseService(this, "projects.json", f);
		},
		
		getProject : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + ".json", f);
		},
		
		getNewProject : function(f) {
			lighthouseService(this, "projects/new.json", f);
		},
		
		//==========================================================
		//  Tickets
		//==========================================================

		listTickets : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/tickets.json", f);
		},
		
		getTicket : function(project_id, ticket_number, f) {
			lighthouseService(this, "projects/" + project_id + "/tickets/" + ticket_number + ".json", f);
		},
		
		getNewTicket : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/tickets/new.json", f);
		},
		
		//==========================================================
		//  Changesets
		//==========================================================
		
		listChangesets : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/changesets.json", f);
		},
		
		getChangeset : function(project_id, changeset_revision, f) {
			lighthouseService(this, "projects/" + project_id + "/changesets/" + changeset_revision + ".json", f);
		},
		
		getNewChangeset : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/changesets/new.json", f);
		},
		
		//==========================================================
		//  Messages
		//==========================================================
		
		listMessages : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/messages.json", f);
		},
		
		getMessage : function(project_id, message_id, f) {
			lighthouseService(this, "projects/" + project_id + "/messages/" + message_id + ".json", f);
		},
		
		getNewMessage : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/messages/new.json", f);
		},
		
		//==========================================================
		//  Milestones
		//==========================================================
		
		listMilestones : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/milestones.json", f);
		},
		
		getMilestone : function(project_id, milestone_id, f) {
			lighthouseService(this, "projects/" + project_id + "/milestones/" + milestone_id + ".json", f);
		},
		
		getNewMilestone : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/milestones/new.json", f);
		},
		
		//==========================================================
		//  Ticket Bins
		//==========================================================
		
		listBins : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/bins.json", f);
		},
		
		getBin : function(project_id, bin_id, f) {
			lighthouseService(this, "projects/" + project_id + "/bins/" + bin_id + ".json", f);
		},
		
		getNewBin : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/bins/new.json", f);
		},
		
		//==========================================================
		//  Users and Memberships
		//==========================================================
		
		getUser : function(user_id, f) {
			lighthouseService(this, "users/" + user_id + ".json", f);
		},
		
		getMemberships : function(user_id, f) {
			lighthouseService(this, "users/" + user_id + "/memberships.json", f);
		},
		
		getProjectMemberships : function(project_id, f) {
			lighthouseService(this, "projects/" + project_id + "/memberships.json", f);
		},
		
		getToken : function(token_id, f) {
			lighthouseService(this, "tokens/" + token_id + ".json", f);
		}
	};
	
})(jQuery);

