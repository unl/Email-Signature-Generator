define({
	institutions: [
		{
			name: 'University of Nebraska &ndash; Lincoln',
			logo: 'https://ucomm.unl.edu/images/email-signature/Nebraska_N_RGB_small_on_white.gif',
			api: 'https://directory.unl.edu/people/{{user}}.json',	// (optional) this is the URI for UNL's directory. All fields are returned as arrays. if this is not provided default data will be used. {{user}} is replaced with what is entered in input box.,
			dataTransforms: function(data){ // (optional) this function is called just before the data is used to generate the signature. You can use it to manipulate data. Here is an example removing the 's' from 'Communications'. You could potentially use it to shim an API that doesn't return data in Arrays. 
				if(data.unlHRPrimaryDepartment){
					data.unlHRPrimaryDepartment[0] = data.unlHRPrimaryDepartment[0].replace("Office of University Communications","Office of University Communication");
				}
				return data
			}
		}
	],
	
	defaultData: { // (required) Data to be used if API does not return a field or if no API is provided. 
		// use "fieldName: null" if a field should be omitted if not provided by the API. Otherwise the field is treated as fallback content. 
		// Object keys are used to determine which fields should be pulled from the API. 
		cn:["Herbie W. Husker"],
		title:["Employee Title"],
		organizationName: ["University of Nebraska&ndash;Lincoln"],
		unlHRPrimaryDepartment:["Department Name"],
		unlHRAddress:["1234 B street, Fakesville, USA"],
		telephoneNumber:["(555) 555-5555"]
	}
});