using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Entity;
using DAL;
namespace BAL
{
    public class BAL_info
    {
        public string insert(BaseEntity BE)
        {
            DAL_info dalinfo = new DAL_info();
            return dalinfo.insert(BE);
            
        }
       

    }
}
