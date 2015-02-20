using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Net;
using System.IO;
using System.Web.Helpers;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace myFormApplication
{
    public partial class Form1 : Form
    {
        JavaScriptSerializer _serialize;
        public Form1()
        {
            InitializeComponent();
            _serialize = new JavaScriptSerializer();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            WebRequest req2 = WebRequest.Create(@"http://pneitsh54453d:1120/Service1.svc/GetAll/2");
            req2.Method = "POST";
            req2.ContentLength = 0;
            req2.ContentType = @"application/json; charset=utf-8";

            HttpWebResponse response = (HttpWebResponse)req2.GetResponse();

            using (StreamReader sr = new StreamReader(response.GetResponseStream()))
            {
                string jsonResponse = string.Empty;
                jsonResponse = sr.ReadToEnd();
                Console.WriteLine(jsonResponse);
                var decodedJson = Json.Decode(jsonResponse);
                var obj = _serialize.Deserialize<Product[]>(decodedJson);
            }


            //req2.BeginGetRequestStream(new AsyncCallback(delegate(IAsyncResult id) { }), req2);

            //req2.BeginGetResponse(new AsyncCallback(delegate(IAsyncResult res) {

            //}), req2);

        }

        private void button2_Click(object sender, EventArgs e)
        {
            WebRequest req2 = WebRequest.Create(@"http://pneitsh54453d:1120/Service1.svc/GetProduct");
            req2.Method = "POST";
            req2.ContentLength = 0;
            req2.ContentType = @"application/json; charset=utf-8";

            HttpWebResponse response = (HttpWebResponse)req2.GetResponse();
            using (StreamReader sr = new StreamReader(response.GetResponseStream()))
            {
                string jsonResponse = string.Empty;
                jsonResponse = sr.ReadToEnd();
                Console.WriteLine(jsonResponse);
                var decodedJson = Json.Decode(jsonResponse);
                var obj = _serialize.Deserialize<Product>(decodedJson);
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {

            WebRequest req2 = WebRequest.Create(@"http://glosbe.com/gapi/translate?from=eng&dest=mar&format=json&phrase=god&pretty=true");
            req2.Method = "POST";
            req2.ContentLength = 0;
            req2.ContentType = @"application/json; charset=utf-8";

            HttpWebResponse response = (HttpWebResponse)req2.GetResponse();
            using (StreamReader sr = new StreamReader(response.GetResponseStream()))
            {
                string jsonResponse = string.Empty;
                jsonResponse = sr.ReadToEnd();
                var decodedJson = Json.Decode(jsonResponse);
                //object[] obj = _serialize.Deserialize<object[]>(decodedJson);


                string jsonString = "{'name':'amit', 'Message': 'hello' }";
                dynamic myObject = JsonConvert.DeserializeObject<dynamic>(jsonString);



                JavaScriptSerializer j = new JavaScriptSerializer();
                object a = j.Deserialize(jsonString, typeof(object));

                var dummyObject = new { name = "", Message = "" };
                var mdk = JsonConvert.DeserializeAnonymousType(jsonString, dummyObject);
////////////////////////////////////////////////////////////////////////////////////////////
                var dummy = new
                {
                    dest = "",
                    result = "",
                    tuc = new[] {
                    a=new phrase()
                    
                    }

                };

                var mdk1 = JsonConvert.DeserializeAnonymousType(jsonResponse, dummy);
                var m = mdk1.tuc;

              



               
            }

        }

        private void button4_Click(object sender, EventArgs e)
        {
            CookieContainer container = new CookieContainer();
            container.Add(new Cookie("First", "xxx") { Domain = "Abc" });
            //container.Add(new Cookie("Second", "yyy") { });

            var c = new Cookie("s", "p")
            {
                Domain = "test",
                Expires = DateTime.Now.AddSeconds(65)

            };


            var con = container;
        }



    }


    public class Product
    {
        public string ProductID { get; set; }
        public string ProductName { get; set; }
    }

    public class phrase
    {
        public string text { get; set; }
    }

}
