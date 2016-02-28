var LoginClient = (function() {
    return {
        login : function(message) {
            var transport = new Thrift.Transport("http://localhost:8080/LoginServlet");
            var protocol  = new Thrift.Protocol(transport);
            var client    = new loginServiceClient(protocol);

            try {
                result = client.login(message);
                return result;
            } catch (ouch) {
                //have to handle error
            }
        }
    };
}());