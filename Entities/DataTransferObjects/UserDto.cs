using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DataTransferObjects
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string GEnder { get; set; }
        public DateTime DateRegistered { get; set; }
        public string AdditionalRequest { get; set; }
    }
}
