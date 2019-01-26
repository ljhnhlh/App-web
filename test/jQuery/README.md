# $.post()

可以使用` .done`,`.fail()`,`.beforesend()`,`.always()`来操作

```
var posting = $.post( url, { s: term } );
 
  // Put the results in a div
  posting.done(function( data ) {
    var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( content );
  });
```

