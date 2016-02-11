using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using BAL;
using Entity;
namespace my_own_n_tier_amit
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Entity_info sai = new Entity_info();
            sai.name = TextBox1.Text;

            BAL_info info = new BAL_info();
            TextBox1.Text = "786"+info.insert(sai);

            

        }
    }
}
