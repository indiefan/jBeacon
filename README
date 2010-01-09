##jBeacon is a jQuery interface to the Lighthouse API. 
It is designed to be a lightweight wrapper interface, facilitating simpler front-end communication directly with Lighthouse, but still remaining flexible enough not to commit the developer to any design decisions (specifically markup).

jBeacon's getters (currently only GET is supported via cross-site json(p) calls) accept anonymous callback functions (with the resulting json as their parameter) as arguments.

###Usage
First, include the jBeacon code onto your page (the only requirement is jQuery)

	<script type="text/javascript" src="jquery.jBeacon.js"></script>
	
Next, you need to tell jBeacon your account settings (most likely in your document ready function)

	$(document).ready(function(){
		$.jBeacon.settings({
			account: "your_account_name"
		})
	});
	
Once you've initialized jBeacon with your account name, you can access the api functions. So for instance, to list all the projects for this account you would write:

	$.jBeacon.listProjects(function(json) {
		//Do Something Here, Projects are passed into json
	});
	
More information regarding the api is available here: http://lighthouseapp.com/api/introduction, but basically each object has three functions available: list, get, and get new. So for Tickets we have:

	listTickets(project_id, callback)
	
	getTicket(project_id, ticket_number, callback) 
	
	getNewTicket(project_id, callback)