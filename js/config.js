define({
  institutions: [
    {
      api: 'https://directory.unl.edu/people/{{user}}.json',	// (optional) this is the URI for UNL's directory. All fields are returned as arrays. if this is not provided default data will be used. {{user}} is replaced with what is entered in input box.,
      dataTransforms: function(data){ // (optional) this function is called just before the data is used to generate the signature. You can use it to manipulate data. Here is an example removing the 's' from 'Communications'. You could potentially use it to shim an API that doesn't return data in Arrays.
        if(data.unlHRPrimaryDepartment){
          data.unlHRPrimaryDepartment[0] = data.unlHRPrimaryDepartment[0].replace("Office of University Communications","Office of University Communication");
          data.unlHRPrimaryDepartment[0] = data.unlHRPrimaryDepartment[0].replace("Hixson-Lied Fine & Performing Arts","College of Fine and Performing Arts");
        }
        return data
      },
      logos: [
        {
          name: 'N-(UNL Icon)',
          alt: 'University of Nebraska &ndash; Lincoln',
          color: '#D00000',
          logo: 'https://ucomm.unl.edu/images/email-signature/Nebraska_N_RGB_small_on_white.gif',
          optgroup: 'university'
        },
        {
          name: 'N-Grit/Glory',
          alt: 'In Our GRIT Our GLORY',
          color: '#D00000',
          logo: 'https://ucomm.unl.edu/images/email-signature/Nebrasla_N_GritGlory_Stacked_RGB.gif',
          optgroup: 'university'
        },
        {
          name: 'N-Grit/Glory with Cornhusker Commitment',
          alt: 'In Our GRIT Our GLORY',
          color: '#D00000',
          logo: 'https://ucomm.unl.edu/images/email-signature/N-CC-Sig-Hor.gif',
          optgroup: 'university'
        },
        {
          name: 'N-Grit/Glory - Campus Recreation',
          alt: 'University of Nebraska &ndash Campus Recreation',
          color: '#D00000',
          logo: 'https://ucomm.unl.edu/images/email-signature/REC-100-Sig-Hor-3.gif',
          optgroup: 'affiliates'
        },
        {
          name: 'N-Museum',
          alt: 'University of Nebraska State Museum',
          color: '#2b5135',
          logo: 'https://ucomm.unl.edu/images/email-signature/unsm.gif',
          optgroup: 'affiliates'
        },
        {
          name: 'NFS',
          alt: 'Nebraska Forest Service',
          color: '#D00000',
          logo: 'https://ucomm.unl.edu/images/email-signature/nfs.gif',
          optgroup: 'affiliates'
        },
        {
          name: '4H',
          alt: '4H',
          color: '#D00000',
          logo: 'https://ucomm.unl.edu/images/email-signature/4h.gif',
          optgroup: 'affiliates'
        }
      ]
    }
  ],

  defaultData: { // (required) Data to be used if API does not return a field or if no API is provided.
    // use "fieldName: null" if a field should be omitted if not provided by the API. Otherwise the field is treated as fallback content.
    // Object keys are used to determine which fields should be pulled from the API.
    displayName:["Herbie W. Husker"],
    title:["Employee Title"],
    organizationName: ["University of Nebraska&ndash;Lincoln"],
    unlHRPrimaryDepartment:["Department Name"],
    unlHRAddress:["1234 B street, Fakesville, USA"],
    telephoneNumber:["(555) 555-5555"]
  }
});

