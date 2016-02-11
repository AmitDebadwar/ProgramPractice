using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Entity;

using System.Data;
using System.Data.SqlClient;
namespace DAL
{
    public class DAL_info
    {
        public string insert(BaseEntity BE)
        {
            string con = "Data Source=BUNTY-PC;Initial Catalog=Synetrader;Integrated Security=True";
            
            Entity_info entinfo = (Entity_info)BE;
        
            
            SqlConnection conn = new SqlConnection(con);
            SqlCommand cmd = new SqlCommand();
          
            cmd.Connection = conn;
            cmd.CommandType = CommandType.Text;
            //cmd.CommandText = "insert into a values('"+entinfo.name+"')";
            //cmd.CommandText = "update a set name='"+entinfo.name+"'where name='sai786'";
            cmd.CommandText = "delete from a where name='saiganesh'";
            conn.Open();
           int i= cmd.ExecuteNonQuery();
            
            



            return i.ToString();









        
        }

    }
}
