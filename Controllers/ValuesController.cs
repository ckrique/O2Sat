using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace O2Sat.Controllers
{
    public class ValuesController : ApiController
    {
        public class Person
        {
            public string name { get; set; }
            public string surname { get; set; }
        }

        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public string Post([FromBody]Person person)
        {
            return "2"+ DateTime.Now.Second.ToString().Substring(1) + "." + DateTime.Now.Second.ToString() + "|" + ((DateTime.Now.Millisecond % 2 == 0) ? "ON" : "OFF");
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
