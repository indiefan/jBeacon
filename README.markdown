##jBeacon is a jQuery interface to the Lighthouse API. 
It is designed to be a lightweight wrapper interface, facilitating simpler front-end communication directly with Lighthouse, but still remaining flexible enough not to commit the developer to any design decisions (specifically markup).

jBeacon's getters (currently only GET is supported via cross-site json(p) calls) accept anonymous callback functions (with the resulting json as their parameter) as arguments.

###Usage
First, include the jBeacon code onto your page (the only requirement is jQuery)

	<script type="text/javascript" src="jquery.jBeacon.js"></script>
	
Next, you need to tell jBeacon your account settings (most likely in your document ready function)

	$.jBeacon.settings({
		account: "your_account_name"
	});
	
If you don't specify a token, most browsers will prompt you to authenticate (after which your api calls will work for the browsing session). However, if you'd prefer bypassing authentication by specifying a token, be sure that it is a read only token. Pass the token in to the settings, as follows:

	$.jBeacon.settings({
		account: "your_account_name",
		token: "your_token"
	});
	
Once you've initialized jBeacon with your account name, you can access the api functions. So for instance, to list all the projects for this account you would write:

	$.jBeacon.listProjects(function(json) {
		//Do Something Here, Projects are passed into json
	});
	
More information regarding the api is available here: http://lighthouseapp.com/api/introduction, but basically each object has three functions available: list, get, and get new. So for Tickets we have:

	listTickets(project_id, callback)
	
	getTicket(project_id, ticket_number, callback) 
	
	getNewTicket(project_id, callback)
	
###Debugging
If you encounter problems dealing with the json you get back, a helpful debug function to use in coordination with firebug is console.dir

So for instance, you could write:

	$.jBeacon.getNewProject(function(json) {
		console.dir(json);
	});
	
And then examine the resulting json in the console.

###Reasons for Using jBeacon
jBeacon provides a simple interface allowing you to write a little less code each time you talk to the Lighthouse API.

Having your app use Ajax to hit the API is faster and provides a better user experience (less page reloads).

Furthermore, using a direct cross-site ajax approach (as is implemented here) as opposed to a server-side intermediary is much faster (cutting page requests in half as a server-side intermediary will have to use something like curl to then access the api from the server).