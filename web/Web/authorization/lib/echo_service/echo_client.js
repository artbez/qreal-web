var EchoClient = (function() {
    return {
    	echo : function(message) {
    	    var transport = new Thrift.Transport("http://localhost:8080/EchoServlet");
    	    var protocol  = new Thrift.Protocol(transport);
    	    var client    = new EchoServiceClient(protocol);

    	    try {
    	      result = client.echo(message);
    	      return result;
    	    } catch(ouch){
    	      //have to handle error
    	    }
    	}
    };
}());