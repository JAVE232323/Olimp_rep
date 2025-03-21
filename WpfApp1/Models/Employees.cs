using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp1.Models
{
    public class Employees
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Middlename { get; set; }
        public int IdPosition { get; set; }
        public string Phone {  get; set; }
        public int IdCabinet { get; set; }
        public string Email { get; set; }
        public int IdDivision { get; set; }
        public DateTime Birthdate { get; set; }

    }
}
