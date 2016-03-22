var DiagramClient = (function() {
    return {
        save : function(message) {
            var transport = new Thrift.Transport("http://localhost:8080/DiagramServlet");
            var protocol  = new Thrift.Protocol(transport);
            var client    = new DiagramServiceClient(protocol);

            try {
                result = client.save(message);
                return result;
            } catch (ouch) {
                //have to handle error
            }
        }
    };
}());