using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Web.Script.Serialization;

namespace WcfServiceApplication
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    public class Service1 : IService1
    {
        JavaScriptSerializer js;

        public Service1()
        {
            js = new JavaScriptSerializer();
        }

        public string GetAllProducts(string id)
        {
            var list = new List<Product>() { 
             new Product(){ ProductID="111", ProductName="Nokia "+id},
             new Product(){ ProductID="222", ProductName="Samsung "},
             new Product(){ ProductID="333", ProductName="Mi"}
            };

            return js.Serialize(list);
        }

        public string GetProduct()
        {
            var obj = new Product()
            {
                ProductID = "1",
                ProductName = "Nokia"
            };

            return js.Serialize(obj);
        }

        public bool SaveProductToCart(Product productToSave)
        {
            throw new NotImplementedException();
        }
    }
}
