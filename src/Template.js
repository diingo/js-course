var render = function(template, obj){

  // a totally different way to do it - obviously not preferable
  // var checkForMatch = function (objectProperty, object) {
  //   if ( template.match("{{" + objectProperty + "}}") ) {
  //     var interpolation = "{{" + objectProperty
  //       + "}}";
  //     template = template.replace(interpolation, object[objectProperty]);
  //     checkForMatch(objectProperty, object);
  //   }
  // };

  // for (objProp in obj) {

  //   // a different way of using variables in regest was a solution from stackoverlow
  //   // from several years ago - which leads to the question:
  //   // is the method I use not compatible with older browsers?
  //   // http://stackoverflow.com/questions/3172985/javascript-use-variable-in-string-match

  //   checkForMatch(objProp, obj);
  // }

  // return template;

  for (objProp in obj) {
    template = template.replace( new RegExp("{{" + objProp + "}}", "g" ), obj[objProp] );
  }

  return template;
};